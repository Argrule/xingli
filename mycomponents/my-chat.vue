<template>
  <view style="height: 100%; display: flex; flex-direction: column">
    <!-- 滚动窗 -->
    <scroll-view
      scroll-y="true"
      class="scroll_view"
      :style="{ height: chatViewHeight }"
      @scrolltolower="scrolltolowerUpdate"
      scroll-with-animation="true"
    >
      <view v-for="(item, i) in messageList" :key="i">
        <view class="messageList">
          <view> {{ item.time }} </view>
          <!-- 左右消息 -->
          <view
            :class="[
              item.left === 1 ? 'messageAndAvatar0' : 'messageAndAvatar1',
            ]"
          >
            <!-- 头像 -->
            <view>
              <u-avatar
                size="45"
                :src="item.avatarUrl"
                shape="circle"
              ></u-avatar>
            </view>
            <!-- message -->
            <view class="msgContent"> {{ item.messageText }} </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="inputMessage" style="display: flex; align-items: center">
      <uni-icons type="mic" size="30"></uni-icons>
      <input class="inputFont" v-model="theMessage" @change="inputMessage" />
      <uni-icons type="color" size="30"></uni-icons>
      <uni-icons type="plus" size="30"></uni-icons>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 高度
      chatViewHeight: `${100 + 100}rpx`,
      // left,1左0右
      messageList: [
        {
          left: 0,
          avatarUrl: "https://cdn.uviewui.com/uview/album/5.jpg",
          messageText: "我好无聊",
          time: "昨天",
        },
        {
          left: 1,
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          messageText: "我是小诉，来陪你聊天了",
          time: "昨天",
        },
        {
          left: 0,
          avatarUrl: "https://cdn.uviewui.com/uview/album/5.jpg",
          messageText: "在吗？在吗？",
          time: "8:10",
        },
        {
          left: 1,
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          messageText: "我是小诉，来陪你聊天了",
          time: "8:10",
        },
        {
          left: 0,
          avatarUrl: "https://cdn.uviewui.com/uview/album/5.jpg",
          messageText: "小诉",
          time: "10:10",
        },
        {
          left: 1,
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          messageText: "我是小诉",
          time: "10:10",
        },
      ],
      // 发送的信息
      theMessage: "",
    };
  },
  created() {
    console.log("onload");
    let screenHeight = uni.getSystemInfoSync();
    console.log("the system info is", screenHeight);
    this.chatViewHeight = `${
      screenHeight.windowHeight * 2 - screenHeight.statusBarHeight * 2 - 50
    }rpx`;
    // console.log(this.chatViewHeight);
  },
  methods: {
    // 滚动到底部
    scrolltolowerUpdate(e) {
      console.log("scrolltolowerUpdate is", e);
    },
    // 发送消息
    inputMessage() {
      console.log("发送消息:", this.theMessage);
      // this.chatViewHeight=`calc(100vh-200rpx)`;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll_view {
  background-color: #f6f6f6;
}
// 发送消息
.inputMessage {
  // display: block;
  height: 100rpx;
  // margin: 15rpx 10rpx;
  padding: 0 15rpx;
  .inputFont {
    width: 100%;
    display: block;
    font-size: 30rpx;
    padding: 5rpx 20rpx;
    border-radius: 35rpx;
    background-color: #e5e5e5;
  }
}
// 聊天信息项
.messageList {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20rpx 20rpx;
  // 消息左靠
  .messageAndAvatar0 {
    display: flex;
    width: 100%;
    .msgContent {
      background-color: #ffffff;
    }
  }
  // 消息右靠
  .messageAndAvatar1 {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    .msgContent {
      background-color: rgb(249, 212, 194);
    }
  }
  // 消息文字
  .msgContent {
    margin: 20rpx;
    padding: 20rpx;
    // 最大宽度
    max-width: 60%;
    border-radius: 20rpx;
  }
}
</style>
