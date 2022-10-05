<template>
  <view>
    <view style="height: 50rpx; background-color: red"></view>
    <!-- 滚动窗 -->
	<scroll-view
      scroll-y="true"
      style="height: 300px"
      @scrolltolower="scrolltolowerUpdate"
      scroll-with-animation="true"
    >
      <view v-for="(item, i) in messageList" :key="i">
        <view class="messageList">
          <view> left:{{ item.left }} </view>
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
            <view class="msgContent"> 消息文字:{{ item.messageText }} </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view style="height: 50rpx; background-color: red"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    scrolltolowerUpdate(e) {
      console.log("scrolltolowerUpdate is", e);
    },
  },
};
</script>

<style lang="scss" scoped>
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
  }
  // 消息右靠
  .messageAndAvatar1 {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
  }
  // 消息文字
  .msgContent {
    margin: 15rpx;
    padding: 15rpx;
	// 最大宽度
	max-width: 60%;
    background-color: cadetblue;
    border-radius: 10rpx;
  }
}
</style>
