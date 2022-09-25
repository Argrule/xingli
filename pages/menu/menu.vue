<template>
  <view>
    <view>
      <u-popup :show="menuShow" @close="close" @open="open" mode="right">
        <view class="popup">
          <view class="popupItem1">
            <view>账号管理</view>
            <view class="move_arrow-right">
              <u-icon name="arrow-right" color="#1b1b1b" size="20"></u-icon>
            </view>
          </view>
          <view class="popupItem"
            >帮助反馈
            <view class="move_arrow-right">
              <u-icon name="arrow-right" color="#1b1b1b" size="20"></u-icon>
            </view>
          </view>
          <view class="popupItem"
            >关于我们
            <view class="move_arrow-right">
              <u-icon name="arrow-right" color="#1b1b1b" size="20"></u-icon>
            </view>
          </view>
          <view class="popupItem"
            >设置
            <view class="move_arrow-right">
              <u-icon name="arrow-right" color="#1b1b1b" size="20"></u-icon>
            </view>
          </view>
        </view>
      </u-popup>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      menuShow: false,
    };
  },
  methods: {
    open() {
      // console.log('open');
    },
    close() {
      this.menuShow = false;
      // console.log('close');
    },
  },
};
</script>

<style lang="less">
.popup {
  width: 400rpx;
  display: flex;
  flex-direction: column;
}
.popupItem1 {
  display: flex;
  margin: 80rpx 30rpx 30rpx;
}
.popupItem {
  display: flex;
  margin: 30rpx;
}
.move_arrow-right {
  position: absolute;
  right: 25rpx;
}
// .move_arrow-right1 {
//   position: absolute;
//   top: 85rpx;
//   // right: 4%;
//   right: 90rpx;
// }
</style>
