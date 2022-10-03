<template>
  <view>
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
</style>