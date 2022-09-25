<template>
  <view>
    <view>
      <u-popup :show="menuShow" @close="close" @open="open" mode="right">
        <view>
          <text>出淤泥而不染，濯清涟而不妖</text>
		  <u-button @click="menuShow = false">关闭</u-button>
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

<style lang="less"></style>
