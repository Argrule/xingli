<template>
	<view>
		this is 树洞
        <view class="suspension">
        <u-icon name="plus-circle-fill" color="#FBC2A6" size="40"></u-icon>
        </view>
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				
			};
		},
        async beforeCreate() {
            console.log('erroe')
            const {data:res} = await uni.$http.get('/hollow/pages')
            console.log('pages.res is :',res);
        }
	}
</script>

<style lang="scss">
.suspension{
    // 悬浮居中
    position: absolute;
    left: 50%;
    transform:translate(-50%,0)  ;
    bottom: 10rpx;    
}
</style>
