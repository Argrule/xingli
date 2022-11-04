<template>
  <view class="example-body custom-image-box">
    <uni-file-picker
      v-model="imageValue"
      limit="1"
      :del-icon="false"
      disable-preview
      :imageStyles="imageStyles"
      file-mediatype="image"
      @success="success"
      @fail="fail"
      >选择</uni-file-picker
    >
  </view>
</template>

<script>
export default {
  data() {
    return {
      imageValue: [],
      imageStyles: {
        // width: 64,
        // height: 64,
        border: {
          radius: "50%",
        },
      },
    };
  },
  methods: {
    // 上传成功
    success(e) {
      console.log("上传成功");
    },
    // 上传失败
    fail(e) {
      console.log("上传失败：", e);
    },
  },
};
</script>

<style lang="less" scoped>
.example-body {
  padding: 10px;
  padding-top: 0;
}

.custom-image-box {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
  color: #333;
}
</style>
