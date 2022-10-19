<template>
  <!-- 背景颜色配合gif动图，不要轻易修改 -->
  <view style="background-color: #fcfcf6">
    <u-sticky bgColor="#fff">
      <view class="functionOptions">
        <u-tabs
          lineColor="#FBC2A6"
          @click="changeFunctionOptions"
          :list="[
            {
              name: 'TALK',
            },
            {
              name: '树洞',
            },
          ]"
        ></u-tabs>
      </view>
    </u-sticky>
    <view v-if="FunctionOptions">
      <my-chat />
    </view>
    <view v-else>
      <my-hollow ref="myHollow" />
    </view>
    <!-- <button @click="gotoTest">myTest</button> -->
  </view>
</template>

<script>
import myChat from "../../mycomponents/my-chat.vue";
import myHollow from "../../mycomponents/my-hollow.vue";
export default {
  data() {
    return {
      FunctionOptions: true,
    };
  },
  components: {
    myChat,
    myHollow,
  },
  // 触底上拉获取数据
  onReachBottom() {
    console.log("onReachBottom");
    if (!this.FunctionOptions)
      // 调用子组件获取更多
      this.$refs.myHollow.scrolltolowerUpdateHollow();
  },
  // 下拉刷新
  onPullDownRefresh() {
    console.log("onPullDownRefresh in talk.vue");
    if (!this.FunctionOptions)
      // 调用子组件刷新函数
      this.$refs.myHollow.myOnPullDownRefresh();
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 500);
  },
  methods: {
    // 测试
    gotoTest() {
      uni.navigateTo({ url: "/pages/waterfall/waterfall" });
    },
    // 改导航
    changeFunctionOptions(item) {
      console.log("hh", item);
      this.FunctionOptions = !item.index;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .u-tabs {
  margin-top: 70rpx;
  align-items: center;
  // background-color: aqua;
}
</style>
