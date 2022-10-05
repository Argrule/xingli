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
          <view> time:{{ item.left }} </view>
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
      chatViewHeight: "900rpx",
      // left,1左0右
      messageList: [
        {
          left: 0,
          avatarUrl: "https://cdn.uviewui.com/uview/album/5.jpg",
          messageText: "你好，我好无聊",
        },
        {
          left: 1,
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          messageText: "我是小诉，来陪你聊天了",
        },
        {
          left: 0,
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          messageText: "我是小诉，来陪你聊天了",
        },
        {
          left: 1,
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          messageText: "我是小诉，来陪你聊天了",
        },
        {
          left: 0,
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          messageText: "小诉",
        },
        {
          left: 1,
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          messageText: "我是小诉",
        },
      ],
      // 发送的信息
      theMessage: "",
    };
  },
  onload() {
    uni.onKeyboardHeightChange((res) => {
      console.log(res.height);
    });
  },
  methods: {
    // 滚动到底部
    scrolltolowerUpdate(e) {
      console.log("scrolltolowerUpdate is", e);
    },
    // 发送消息
    inputMessage() {
      console.log("发送消息:", this.theMessage);
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
  display: block;
  margin: 15rpx 10rpx;
  padding: 15rpx;
  .inputFont {
    width: 100%;
    padding: 15rpx;
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
