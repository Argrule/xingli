<template>
  <view>
    <!-- 添加树洞 -->
    <view class="suspension">
      <u-icon
        name="plus-circle-fill"
        @click="gotoPutHollow"
        color="#FBC2A6"
        size="40"
      ></u-icon>
    </view>
    <!-- 树洞消息 -->
    <view style="display: flex; justify-content: space-around">
      <view class="hollowTextLeft">
        <view v-for="(item, index) in hollowsList1" :key="index">          
          <view class="TextLeft">
            <view> {{ item.story }} </view>
          </view>
          <!-- <view class="TextLeft">
          <view> hello3 </view>
        </view> -->
        </view>
      </view>
      <view class="hollowTextRight">
        <view v-for="(item, index) in hollowsList2" :key="index">          
          <view class="TextRight">
            <view> {{ item.story }} </view>
          </view>         
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 左列
      hollowsList1: [{ story: "story1" }, { story: "story2" }],
      // 右列
      hollowsList2: [{ story: "story3" }, { story: "story4" }],
    };
  },
  // 获取树洞
  async beforeCreate() {
    const { data: res } = await uni.$http.get("/hollow/pages");
    console.log("pages.res is :", res);
    // 调用get函数
    this.getHollows();
  },
  // 下拉刷新
  // async onPullDownRefresh(){
  //   const { data: res } = await uni.$http.get("/hollow/pages");
  //   console.log("pages.res is :", res);
  //   // 调用get函数
  //   this.getHollows();
  // },
  methods: {
    // 发请求获取hollows
    async getHollows() {
      const { data: res } = await uni.$http.get("/hollow/hollows?page=1");
      // this.hollowsList=res.data;
      console.log("hollows", res.data);
      // 配置左列
      this.hollowsList1 = res.data.filter((element, index) => {
        return index % 2 == 0;
      });
      // 配置右列
      this.hollowsList2 = res.data.filter((element, index) => {
        return index % 2 == 1;
      });
    //   console.log(this.hollowsList1);
    //   console.log(this.hollowsList2);
    },
    // 跳转到提交hollow页面
    gotoPutHollow() {
      console.log("gotoPutHollow");
      uni.navigateTo({ url: "/mycomponents/my-puthollow/my-puthollow" });
    },
  },
};
</script>

<style lang="scss" scoped>
.suspension {
  // 悬浮居中
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 10rpx;
}
.hollowTextLeft {
  // float: left;
  width: 45%;
}
.hollowTextRight {
  // float: right;
  width: 45%;
}
.TextLeft {
  margin: 10rpx 0 10rpx;
  border-radius: 15rpx;
  padding: 25rpx 15rpx;
  background-color: rgb(242, 222, 215);
}
.TextRight {
  margin: 10rpx 0 10rpx;
  border-radius: 15rpx;
  padding: 25rpx 15rpx;
  background-color: rgb(250, 224, 211);
}
.light {
  background-color: aqua;
}
</style>
