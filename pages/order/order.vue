<template>
  <view style="background-color: #fcfcf6">
    <!-- 搜索框 -->
    <u-sticky bgColor="#fff">
      <u-search
        height="25"
        :clearabled="false"
        v-model="keyword"
        margin="0.1rpx 50rpx 40rpx"
        :showAction="false"
        @search="searchKeyWord"
      ></u-search>
    </u-sticky>
    <!-- 头部 -->
    <view class="headPart">
      <view class="title">心理咨询</view>
      <!-- 跳转聊天界面 -->
      <view class="chatIcon">
        <u-icon
          name="chat"
          @click="gotoChat"
          color="#DC8C6B"
          size="35"
        ></u-icon>
      </view>
    </view>
    <!-- 医生列表 -->
    <view>
      <view style="display: flex; justify-content: space-evenly">
        <view class="docotorListLeft">
          <view v-for="(item, index) in docotorList1" :key="index">
            <view class="TextLeft" @click="clickDocotorDetail(item)">
              <view class="avatar">
                <u-avatar
                  size="60"
                  :src="item.avatarUrl"
                  shape="circle"
                ></u-avatar>
              </view>
              <view class="fontDocotorName"> {{ item.name }} </view>
              <view class="fontGoodAt"> {{ item.goodat }} </view>
            </view>
          </view>
        </view>
        <view class="docotorListRight">
          <view v-for="(item, index) in docotorList2" :key="index">
            <view class="TextRight" @click="clickDocotorDetail(item)">
              <view class="avatar">
                <u-avatar
                  size="60"
                  :src="item.avatarUrl"
                  shape="circle"
                ></u-avatar>
              </view>
              <view class="fontDocotorName"> {{ item.name }} </view>
              <view class="fontGoodAt"> {{ item.goodat }} </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 医生信息弹窗 -->
    <u-popup
      :show="docotorDetailDialog"
      mode="bottom"
      round="10"
      @close="changeShowDialog"
    >
      <view style="background-color: #ffceb7">
        <view class="dialogBoder">
          <!-- 头像等 -->
          <view class="avatarAndOther">
            <u-avatar
              size="60"
              :src="docotorDetail.avatarUrl"
              shape="circle"
            ></u-avatar>
            <view
              style="display: flex; flex-direction: column; align-items: center"
            >
              <view class="docotorAndAge">
                <view class="docotorNameFont">
                  {{ docotorDetail.name }}
                </view>
                <view class="ageFont"> {{ docotorDetail.age }}岁 </view>
              </view>
              <view class="communicateFont">
                联系方式:{{ docotorDetail.communicate }}
              </view>
            </view>
          </view>
          <!-- 经验 -->
          <view class="descriptionWord">{{ docotorDetail.exp }}</view>
          <!-- 寄语 -->
          <view class="descriptionWord">医生寄语：{{ docotorDetail.msg }}</view>
        </view>
        <!-- 预约按钮 -->
        <button class="orderButton" @click="clickOrderButton(docotorDetail.id)">
          预约
        </button>
      </view>
    </u-popup>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // 节流阀
      isLoading: false,
      theDocListPage: 1, //当前页
      docListPage: 1, //页数

      // 关键字搜索
      keyword: "",
      // 医生信息弹窗
      docotorDetailDialog: false,
      // 左列
      docotorList1: [],
      // 右列
      docotorList2: [],
      // 医生信息
      docotorDetail: {
        id: 0,
        name: "李某",
        communicate: "11451419198",
        exp: "java手写时长两年半",
        msg: "手写代码是为了让大家期末考试都能过，望周知",
        age: 39,
        avatarUrl: "https://cdn.uviewui.com/uview/album/5.jpg",
      },
    };
  },
  created() {
    this.getDocotorList();
  },
  // 触底上拉获取数据
  async onReachBottom() {
    console.log("onReachBottom");
    if (this.isLoading) return;
    this.isLoading = true;
    // 页数超过了，不请求
    if (this.theDocListPage >= this.docListPage) {
      console.log("还能触发页数超了");
      return (this.isloading = false);
    }
    await this.getDocotorList(++this.theDocListPage);
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  },
  methods: {
    ...mapMutations("m_dchat", ["setAdvisoryId"]),
    // 获取docotor列表
    async getDocotorList(thePage = 1) {
      console.log("// 获取docotor列表");
      const { data: res } = await uni.$http.get("/advisory/doctors", {
        page: thePage,
      });
      // 左右插入
      res.data.doctors.forEach((element, index) => {
        if (index % 2) this.docotorList2.push(element);
        else this.docotorList1.push(element);
      });
      // 更新页数
      this.docListPage = res.data.pages;
      // this.docotorList1 = [...this.docotorList1, ...res.data.doctors];
      console.log("DocotorList1", this.docotorList1);
    },
    // 点击遮罩关闭弹窗,必须要写成函数，@close里会失效
    changeShowDialog() {
      console.log("// 点击遮罩关闭弹窗");
      this.docotorDetailDialog = false;
    },
    // 关键字搜索
    searchKeyWord() {
      console.log("searchKeyWord =", this.keyword);
    },
    // 打开聊天界面
    gotoChat() {
      console.log("go to chat");
      uni.navigateTo({ url: "/pages/order/docotorChat" });
    },
    // 弹窗医生简介
    async clickDocotorDetail({ id: myid }) {
      console.log("id is ", myid);
      const { data: res } = await uni.$http.get("/advisory/doctor", {
        id: myid,
      });
      console.log("docotor detail is", res);
      // 替换为当前医生的信息
      this.docotorDetail = res.data;
      // 关闭弹窗
      this.docotorDetailDialog = true;
    },
    // 点击预约按钮
    async clickOrderButton(theDocotorId) {
      console.log("clickOrderButton");
      const { data: res } = await uni.$http.put("/advisory/reserve", {
        doctorId: theDocotorId,
      });
      // 关闭弹窗
      this.docotorDetailDialog = false;
      console.log("// 点击预约按钮", res);
      this.setAdvisoryId(res.data.advisoryId);
    },
  },
};
</script>

<style lang="less" scoped>
// 弹窗外层布局
.dialogBoder {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #ffffff;
  margin: 80rpx 40rpx;
  border-radius: 15rpx;
  padding: 10rpx;
  // 头像等
  .avatarAndOther {
    display: flex;
    justify-content: space-evenly;
    margin: 40rpx 0;
  }
  // 姓名与年龄
  .docotorAndAge {
    width: 100%;
    display: flex;
    // justify-content: start;
    align-items: center;
  }
  // 医生名字字体
  .docotorNameFont {
    font-size: 40rpx;
    font-weight: 600;
    margin: 10rpx 0 10rpx 0;
    // background-color: aqua;
  }
  // 年龄字体
  .ageFont {
    margin: 10rpx 20rpx;
    font-size: 30rpx;
    font-weight: 600;
    // background-color: #f6b4a6;
  }
  // 联系方式字体
  .communicateFont {
    font-size: 30rpx;
    color: rgb(151, 180, 209);
  }
  // 描述字体
  .descriptionWord {
    font-size: 35rpx;
    font-weight: 500;
    margin: 20rpx 0;
    padding: 0 10rpx;
  }
}
// 预约按钮
.orderButton {
  width: 50%;
  background-color: rgb(255, 133, 83);
  color: #ffffff;
  position: relative;
  bottom: 40rpx;
}
// 头部
.headPart {
  display: flex;
  position: relative;
  .title {
    font-size: 36rpx;
    font-weight: 600;
    margin: 30rpx 0 10rpx 0;
    border-left: 8rpx solid #f6b4a6;
    padding-left: 20rpx;
  }
  .chatIcon {
    margin: 30rpx 0 10rpx 0;
    position: absolute;
    right: 5%;
  }
}
// 医生列表
.TextLeft {
  background-color: #ffffff;
  margin: 30rpx 0;
  padding: 10rpx;
  border-radius: 20rpx;
  box-shadow: 0px 2px 8px rgb(109, 109, 109);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.TextRight {
  background-color: #ffffff;
  margin: 30rpx 0;
  padding: 10rpx;
  border-radius: 20rpx;
  box-shadow: 0px 2px 8px rgb(109, 109, 109);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  margin-top: 30rpx;
}
// 医生名字
.fontDocotorName {
  font-size: 36rpx;
  font-weight: 600;
  margin: 30rpx 0 10rpx 0;
}
// 医生擅长
.fontGoodAt {
  font-size: 30rpx;
  font-weight: 300;
  color: #464444;
}
.docotorListLeft {
  width: 45%;
}
.docotorListRight {
  width: 45%;
}
/deep/ .u-sticky {
  height: 100rpx;
}
</style>
