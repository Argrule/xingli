<template>
  <view>
    <!-- 头部两张图 -->
    <view class="headPart">
      <u--image
        :src="photoUrl"
        width="330rpx"
        height="450rpx"
        radius="15"
      ></u--image>
      <u--image
        :src="photoUrl"
        width="330rpx"
        height="450rpx"
        radius="15"
      ></u--image>
    </view>
    <!-- 测试列表 -->
    <!-- <view v-for="(item,index) in list" :key="index"> -->
    <view>
      <!-- 列表中的每一项 -->
      <view class="testListItem">
        <!-- 左边文字 -->
        <view class="wordFont">
          <view class="topWord">心理健康测评-SCL90</view>
          <view class="bottomWord">你的心理健康指数打多少分</view>
        </view>
        <!-- 右边按钮 -->
        <button class="testButton" size="mini">进入测试</button>
      </view>
      <view class="testListItem">
        <!-- 左边文字 -->
        <view class="wordFont">
          <view class="topWord">心理健康测评-SCL90</view>
          <view class="bottomWord">你的心理健康指数打多少分</view>
        </view>
        <!-- 右边按钮 -->
        <button class="testButton" size="mini">进入测试</button>
      </view>
      <view class="testListItem">
        <!-- 左边文字 -->
        <view class="wordFont">
          <view class="topWord">心理健康测评-SCL90</view>
          <view class="bottomWord">你的心理健康指数打多少分</view>
        </view>
        <!-- 右边按钮 -->
        <button class="testButton" size="mini">进入测试</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      photoUrl: "https://cdn.uviewui.com/uview/album/8.jpg",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.headPart {
  display: flex;
  justify-content: space-evenly;
  margin: 15rpx 0;
}
// 测试列表中的项
.testListItem {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 30rpx 15rpx;
  border-radius: 15rpx;
  padding: 10rpx;
  background-color: #ffffff;
  .wordFont {
    // display: flex;
    // flex-direction: column;
    .topWord {
      margin: 15rpx 0;
      font-size: 36rpx;
      font-weight: 600;
    }
    .bottomWord {
      margin: 15rpx 0;
      font-size: 25rpx;
      font-weight: 400;
      color: rgb(108, 108, 108);
    }
  }
  .testButton {
    background-color: #f6b4a6;
    border: none;
    margin: 10rpx 10rpx;
    border-radius: 15rpx;
  }
}
</style>
