<template>
  <view>
    <view class="textarea">
      <u--textarea
        v-model="story"
        placeholder="心事说给树听......"
        border="none"
      ></u--textarea>
    </view>
    <view class="suspension">
      <uni-icons
        type="paperplane-filled"
        @click="putHollow"
        color="#FBC2A6"
        size="40"
      ></uni-icons>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      story: "",
    };
  },
  methods: {
    async putHollow() {
    //   console.log("putHollow");	  
      const { data: res } = await uni.$http.put("/hollow/hollow",{story:this.story});
	  console.log("putHollow",res);
    },
  },
};
</script>

<style lang="scss">
.textarea {
  margin-top: 20rpx;
}
.suspension {
  // 悬浮居中
  position: absolute;
  left: 80%;
  // transform:translate(-50%,0)  ;
  bottom: 20%;
}
</style>
