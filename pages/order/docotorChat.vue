<template>
  <view style="height: 100%; display: flex; flex-direction: column">
    <!-- 滚动窗 ,:style="{ height: chatViewHeight }"失败-->
    <scroll-view
      scroll-y="true"
      class="scroll_view"
      @scrolltolower="scrolltolowerUpdate"
      scroll-with-animation="true"
    >
      <!-- <view></view> -->
      <view v-for="(item, i) in messageList" :key="i">
        <view class="messageList">
          <view> {{ transTime(item.timestamp) }} </view>
          <!-- 左右消息 -->
          <view
            :class="[item.fromMe ? 'messageAndAvatar1' : 'messageAndAvatar0']"
          >
            <!-- 头像 -->
            <view>
              <u-avatar
                size="45"
                :src="
                  item.fromMe
                    ? avatarUrl
                    : docAvatarUrl
                "
                shape="circle"
              ></u-avatar>
            </view>
            <!-- message -->
            <view class="msgContent"> {{ item.message }} </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <!-- 输入框，表情之类的待添加，最好分离成组件 -->
    <view class="inputMessage">
      <uni-icons type="mic" size="30"></uni-icons>
      <!-- confirm监听手机enter事件 -->
      <input class="inputFont" v-model="theMessage" @confirm="inputMessage" />
      <uni-icons type="color" size="30"></uni-icons>
      <uni-icons type="plus" size="30"></uni-icons>
    </view>
  </view>
</template>

<script>
import wxRequest from "./chatSocket.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // 全局websocket对象
      socket: null,      
      messageList: [
        // {
        //   left: 0,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/5.jpg",
        //   messageText: "我好无聊",
        //   time: "昨天",
        // },
        // {
        //   left: 1,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
        //   messageText: "我是小诉，来陪你聊天了",
        //   time: "昨天",
        // },
        // {
        //   left: 0,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/5.jpg",
        //   messageText: "在吗？在吗？",
        //   time: "8:10",
        // },
        // {
        //   left: 1,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
        //   messageText: "我是小诉，来陪你聊天了",
        //   time: "8:10",
        // },
        // {
        //   left: 0,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/5.jpg",
        //   messageText: "小诉",
        //   time: "10:10",
        // },
        // {
        //   left: 1,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
        //   messageText: "我是小诉",
        //   time: "10:10",
        // },
        // {
        //   left: 1,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
        //   messageText: "我是小诉",
        //   time: "10:10",
        // },
        // {
        //   left: 1,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
        //   messageText: "我是小诉",
        //   time: "10:10",
        // },
        // {
        //   left: 1,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
        //   messageText: "我是小诉",
        //   time: "10:10",
        // },
        // {
        //   left: 1,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
        //   messageText: "我是小诉",
        //   time: "10:10",
        // },
        // {
        //   left: 1,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
        //   messageText: "我是小诉",
        //   time: "10:10",
        // },
        // {
        //   left: 1,
        //   avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
        //   messageText: "我是小诉",
        //   time: "10:10",
        // },
      ],
      // 发送的信息
      theMessage: "",
    };
  },
  computed: {
    ...mapState("m_personal", ["avatarUrl"]),
    ...mapState("m_dchat", ["advisoryId",'docAvatarUrl']),
  },  
  mounted() {
    let my_token = uni.getStorageSync("token");
    this.socket = new wxRequest(
      "ws://ainame.xyz:38080/advisory/chat?token=" +
        my_token +
        "&advisoryId=" +
        this.advisoryId,
      5000000,
      this.messageList
    );
  },
  beforeDestroy(){
	// 关闭对话
	this.socket.close();
  },
  methods: {
    // 时间戳转为时间
    transTime(timeNumStr) {
      let msgTime = new Date(timeNumStr * 1000);
      return msgTime.toLocaleTimeString();
    },
    // 滚动到底部
    scrolltolowerUpdate(e) {
      console.log("scrolltolowerUpdate is", e);
    },
    // 发送消息
    async inputMessage() {
      if (this.theMessage == "") return;
      console.log("发送消息:", this.theMessage);
      const res = await this.socket.send(
        JSON.stringify({ message: this.theMessage })
      );
      console.log("websocket发送是否成功：", res);
      if (res == undefined) {
        this.messageList.push({
          fromMe: true,
          message: this.theMessage,
          // objectId: 0,
          timestamp: parseInt(new Date() / 1000),
        });
        this.theMessage = "";
      }      
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll_view {
  // background-color: ;
  padding-bottom: 40rpx;
}
// 发送消息
.inputMessage {
  // 去掉高度之后，高度为screenHeight-88莫名奇妙就没有空白了
  // 没救了，不管怎么操作screenHeight，都会有一块空白去不掉
  // height: 100rpx;
  // background-color: aqua;
  //   z-index: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  // 必须fixed，手机留有一段空白，sticky和absolute都很怪
  position: fixed;
  bottom: 0;
  // 必须100%，由于fixed定位
  width: 100%;
  padding: 10rpx 15rpx;
  // 需要给颜色，否则显示scroll-view的颜色
  background-color: #f6f6f6;
  .inputFont {
    // width: 100%;
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
