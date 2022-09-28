<template>
  <view>
    <!-- 右弹窗 -->
    <menuBoard ref="menuBoard"></menuBoard>
    <!-- 头像部分 -->
    <view class="content">
      <view class="person">
        <view class="avatar">
          <u-avatar size="60" :src="this.avatarUrl" shape="circle"></u-avatar>
        </view>
        <view class="nickName">
          <view style="display: flex;">
            <view>{{ userName }}</view>
            <view v-if="gender"><u-icon name="man" color="#2979ff" size="28"></u-icon></view>       
            <view v-else><u-icon name="woman" color="rgb(231, 94, 155)" size="28"></u-icon></view>       
          </view>
          <view> ID: {{ userId }} </view>
        </view>
        <view class="list-icon">
          <!-- 打开右弹窗 -->
          <u-icon
            @click="toDoList"
            name="list-dot"
            color="#DC8C6B"
            size="20"
          ></u-icon>
          <view style="position: relative; bottom: 11%">
          <u-icon            
            @click="changePersonal"
            name="arrow-right"
            color="#DC8C6B"
            size="20"
          ></u-icon>
          </view>
        </view>
      </view>
      <!-- 防塌陷 -->
      <view class="empty"></view>
    </view>
    <!-- mood-dairy部分 -->
    <view class="mood-dairy">
      <view class="flexMood">
        <!-- 左侧框 -->
        <view class="mood-font">
          <u-icon name="edit-pen" color="#DC8C6B" size="25"></u-icon>
          <view class="mood-word"> MOOD DAIRY </view>
        </view>
        <!-- 右侧日期 -->
        <view class="dateTime">{{ dateTime }}</view>
      </view>
      <!-- dairy内容 -->
      <view class="dairyDetail">{{ dateContent }}</view>
    </view>
    <!-- to-do-list部分 -->
    <view class="to-do-list">{{ dateContent }}</view>
  </view>
</template>

<script>
import menuBoard from "../menu/menu.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // dairy
      dateTime: "2022/9/22 Sunday",
      dateContent: "今天非常开心，因为不用大筛",
    };
  },
  computed: {
    ...mapState("m_personal", ["userId", "userName", "gender", "avatarUrl"]),
  },
  components: {
    menuBoard,
  },
  methods: {
    changePersonal() {
      console.log("changePersonal");
      uni.navigateTo({
        url: "/pages/changePersonInformation/changePersonInformation",
      });
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
  margin: 80rpx 60rpx 30rpx 90rpx;
  // position: relative;
  // left: 10%;
}
.empty {
  margin: 10rpx;
  height: 10rpx;
}
.nickName {
  margin-top: 60rpx;
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
  color: rgba(32, 41, 41, 0.76);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.list-icon {
  position: relative;
  left: 30%;
  // margin-top: 60rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
// .list-dot-icon {
//   position: absolute;
//   right: 10%;
//   top: 20rpx;
// }
// .arrow-right-icon {
//   margin: 50rpx;
//   position: absolute;
//   top: 70rpx;
//   right: 4%;
// }
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
.flexMood {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.mood-font {
  display: flex;
  border-radius: 10rpx;
  width: 300rpx;
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
  // position: absolute;
  // right: 6%;
  // top: 20rpx;
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
