<template>
  <view>
    <view class="list-dot-icon">
      <u-icon
        @click="toDoList"
        name="list-dot"
        color="#DC8C6B"
        size="20"
      ></u-icon>
    </view>
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
      <view class="empty"></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      nickName: "梦溪",
      id: "0000000",
    };
  },
  methods: {
    changePersonal() {
      console.log("changePersonal");
    },
    toDoList() {
      console.log("toDoList");
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
</style>
