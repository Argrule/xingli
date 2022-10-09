<template>
  <view class="buttonPosition">
    <view>
      <button class="talkButton" @click="gotoChat">LET'S TALK!</button>
    </view>
    <view style="margin-top: 20%">
      <!-- 动图 -->
      <image src="../static/gif/letTalk.gif" mode="aspectFit" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  // 下拉刷新,作为组件无效
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
  },
  methods: {
    // 跳转聊天界面
    gotoChat() {
      uni.navigateTo({ url: "/pages/talk/chat" });
    },
  },
};
</script>

<style lang="scss" scoped>
.buttonPosition {
  height: 100%;
  width: 100%;
}
.talkButton {
  width: 50%;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%);
  margin: 10rpx auto;
  background-color: rgb(255, 133, 83);
  color: #ffffff;
}
</style>
