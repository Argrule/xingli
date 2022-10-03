<template>
  <view>
    <!-- 搜索框 -->
    <u-sticky bgColor="#fff">
      <u-search
        class="u_search"
        height="10"
        :clearabled="false"
        v-model="keyword"
        margin="50rpx 30rpx 0rpx 30rpx"
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
      :round="10"
      @close="this.docotorDetailDialog=false"         
    >
      <view>        
        <u-avatar
          size="60"
          :src="docotorDetail.avatarurl"
          shape="circle"
        ></u-avatar>
        <text>人生若只如初见，何事秋风悲画扇</text>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 关键字搜索
      keyword: "",
      // 医生信息弹窗
      docotorDetailDialog: false,
      // 左列
      docotorList1: [
        {
          id: 0,
          name: "猫猫学长",
          avatarUrl: "https://cdn.uviewui.com/uview/album/1.jpg",
          goodat: "亲子关系",
        },
        {
          id: 1,
          name: "猫猫学姐",
          avatarUrl: "https://cdn.uviewui.com/uview/album/2.jpg",
          goodat: "婚姻关系",
        },
      ],
      // 右列
      docotorList2: [
        {
          id: 3,
          name: "大熊猫",
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          goodat: "恋爱关系",
        },
        {
          id: 4,
          name: "小熊猫",
          avatarUrl: "https://cdn.uviewui.com/uview/album/4.jpg",
          goodat: "校园关系",
        },
      ],
      // 医生信息
      docotorDetail: {
        id: 0,
        name: "*磊",
        communicate: "11451419198",
        exp: "java手写时长两年半",
        msg: "手写代码是为了让大家期末考试都能过，望周知",
        age:39,
        avatarurl:'https://cdn.uviewui.com/uview/album/5.jpg'
      },
    };
  },
  methods: {
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
      this.docotorDetailDialog=true;
    },    
  },
};
</script>

<style lang="less" scoped>
.headPart {
  display: flex;
  position: relative;
}
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
</style>
