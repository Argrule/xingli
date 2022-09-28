<template>
  <view>
    <u-sticky bgColor="#fff">      
      <view class="functionOptions">
        <u-tabs
          lineColor="#FBC2A6"
          @click="changeFunctionOptions"
          :list="[
            {
              name: 'TALK',
            },
            {
              name: '树洞',
            },
          ]"
        ></u-tabs>
      </view>
    </u-sticky>
	<view v-if="FunctionOptions">
		this is TALK
	</view>
	<view v-else>
		this is 树洞
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
		FunctionOptions:true,
	};
  },
  methods: {
	// 改导航
	changeFunctionOptions(item){
		console.log('hh',item);
		this.FunctionOptions=!item.index;
	},
  },
};
</script>

<style lang="less" scoped>
/deep/ .u-tabs{	
	margin-top: 70rpx;
	align-items: center;	
	// background-color: aqua;
}
</style>
