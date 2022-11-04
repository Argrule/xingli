<template>
  <view>
    <!-- 头部两张图 -->
    <view class="headPart">
      <u--image
        :src="photoUrl1"
        width="330rpx"
        height="450rpx"
        radius="15"
      ></u--image>
      <u--image
        :src="photoUrl2"
        width="330rpx"
        height="450rpx"
        radius="15"
      ></u--image>
    </view>
    <!-- 测试列表 -->
    <view v-for="(item, index) in testDataList" :key="index">
      <!-- 列表中的每一项 -->
      <view class="testListItem">
        <!-- 左边文字 -->
        <view class="wordFont">
          <view class="topWord">{{ item.name }}</view>
          <view class="bottomWord">{{ item.discription }}</view>
        </view>
        <!-- 右边按钮 -->
        <view class="testButton"
          ><uni-link :href="item.url" color="black" showUnderLine="false"
            >进入测试</uni-link
          ></view
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      photoUrl1: "https://i0.hdslb.com/bfs/album/cc311de2ace4edebede945f3282148133200044b.png@1036w.webp",
      photoUrl2: "https://i0.hdslb.com/bfs/album/a2265521dd2ed3cc22b0db76c13f2ad557b955ce.png@1036w.webp",
      // 测试的列表数据
      testDataList: [
        {
          name: "人格测试",
          discription: "你的心理健康指数打多少分",
          url: "https://www.16personalities.com/profile",
        },
        {
          name: "心理健康测评-SCL90",
          discription: "你的心理健康指数打多少分",
          url: "http://scl90.chuangyiquan.net/?id=bdyiyu-wz&bd_vid=7645060913005989914",
        },
        {
          name: "抑郁测试-SCL",
          discription: "今天你玉玉了吗？",
          url: "http://ceshi.youluzept.cn/depressed/?bd_vid=8282740853496576174#/",
        },
        {
          name: "抑郁测试-SCL90",
          discription: "今天你玉玉了吗？",
          url: "http://scl90.chuangyiquan.net/?id=bdyiyu-wz&bd_vid=7645060913005989914",
        },
      ],
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
  // display: flex;
  // justify-content: space-evenly;
  // align-items: center;
  position: relative;
  margin: 30rpx 15rpx;
  border-radius: 15rpx;
  padding: 10rpx;
  background-color: #ffffff;
  .wordFont {
    // display: flex;
    // flex-direction: column;
    margin-left: 30rpx;
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
    // button相对位置
    position: absolute;
    right: 30rpx;
    top: 50%;
    transform: translate(0, -60%);
    background-color: #f6b4a6;
    border: none;
    padding: 20rpx 30rpx;
    font-size: 36rpx;
    font-weight: 600;
    margin: 10rpx 10rpx;
    border-radius: 15rpx;
  }
}
</style>
