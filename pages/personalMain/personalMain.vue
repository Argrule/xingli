<template>
  <view>
    <!-- 右弹窗 -->
    <menuBoard ref="menuBoard"></menuBoard>
    <!-- 打开右弹窗 -->
    <view class="list-dot-icon">
      <u-icon
        @click="toDoList"
        name="list-dot"
        color="#DC8C6B"
        size="20"
      ></u-icon>
    </view>
    <!-- 头像部分 -->
    <view class="content">
      <view class="person">
        <view class="avatar">
          <u-avatar
            size="60"
            src="https://cdn.uviewui.com/uview/album/1.jpg"
            shape="circle"
          ></u-avatar>
        </view>
        <view>
          <view class="nickName">
            {{ nickName }}
          </view>
          <view class="nickName"> ID: {{ id }} </view>
        </view>
        <view class="arrow-right-icon">
          <u-icon
            @click="changePersonal"
            name="arrow-right"
            color="#DC8C6B"
            size="20"
          ></u-icon>
        </view>
      </view>
      <!-- 防塌陷 -->
      <view class="empty"></view>
    </view>
    <!-- mood-dairy部分 -->
    <view class="mood-dairy">
      <!-- 左侧框 -->
      <view class="mood-font">
        <u-icon name="edit-pen" color="#DC8C6B" size="25"></u-icon>
        <view class="mood-word"> MOOD DAIRY </view>
      </view>
      <!-- 右侧日期 -->
      <view class="dateTime">{{ dateTime }}</view>
      <!-- dairy内容 -->
      <view class="dairyDetail">{{ dateContent }}</view>
    </view>
    <!-- to-do-list部分 -->
    <view class="to-do-list">{{ dateContent }}</view>
  </view>
</template>

<script>
import menuBoard from "../menu/menu.vue";
export default {
  data() {
    return {
      // 个人信息
      nickName: "梦溪",
      id: "0000000",
      // dairy
      dateTime: "2022/9/22 Sunday",
      dateContent:
        "今天非常开心，支持学校动态清零，防疫为重，国庆人流量大，咱们舍小家为大家（正确的，中肯的，客观的，雅致的，一针见血的）",
    };
  },
  components: {
    menuBoard,
  },
  methods: {
    changePersonal() {
      console.log("changePersonal");
    },
    toDoList() {
      console.log("toDoList");
      this.$refs.menuBoard.menuShow = true;
    },
  },
};
</script>

<style lang="less">
page {
  background: #f8f8f8;
  letter-spacing: 1px;
}
.content {
  background-color: #f6b4a6;
}
.avatar {
  margin: 10rpx 60rpx 50rpx 90rpx;
  // position: relative;
  // left: 10%;
}
.empty {
  margin: 10rpx;
  height: 10rpx;
}
.nickName {
  margin-top: 15rpx;
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
  color: rgba(32, 41, 41, 0.76);
}
.list-dot-icon {
  position: absolute;
  right: 10%;
  // top: 1rpx;
  // bottom: 1%;
  // margin: 100rpx;
}
.arrow-right-icon {
  margin: 50rpx;
  position: relative;
  top: 50rpx;
  left: 10%;
}
.person {
  display: flex;
}
.mood-dairy {
  height: 330rpx;
  background: #fff;
  margin: 15rpx 40rpx;
  padding: 15rpx;
  border-radius: 10rpx;
  box-shadow: // 2px 0px 8px rgb(109, 109, 109),  /*右边阴影*/
    0px 2px 8px rgb(109, 109, 109); /*下边阴影*/
}
.mood-font {
  display: flex;
  border-radius: 10rpx;
  width: 350rpx;
  background-color: rgb(240, 240, 240);
}
.mood-word {
  color: #dc8c6b;
  font-size: 35rpx;
  font-weight: 300;
}
.dateTime {
  color: #dc8c6b;
  font-size: 30rpx;
  font-weight: 300;
  position: absolute;
  right: 6%;
  top: 24%;
}
.dairyDetail {
  margin: 5rpx 0;
  font-size: 30rpx;
}
.to-do-list {
  font-size: 30rpx;
  height: 400rpx;  
  background: #fff;
  margin: 25rpx 40rpx;
  padding: 15rpx;
  border-radius: 10rpx;
  box-shadow: 0px 2px 8px rgb(109, 109, 109);
}
</style>
