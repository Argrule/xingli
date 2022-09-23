<template>
	<view>
		<view class="content">			
			<view class="person">
				<view class="avatar">
					<u-avatar size="55" src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle"></u-avatar>
				</view>
				<view>
					<view class="nickName">
						{{nickName}}
					</view>
					<view class="nickName">
						ID: {{id}}
					</view>					
				</view>
				<view class="arrow-right-icon">
					<u-icon name="arrow-right" color="#DC8C6B" size="20"></u-icon>
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
				nickName:'梦溪',
				id:'0000000',
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="less">
	page {
		background: #f8f8f8;
		letter-spacing: 1px;
	}
	.content{		
		background-color: #F6B4A6;
	}	
	.avatar{
		margin: 10rpx 50rpx 50rpx;
		// position: relative;
		// left: 10%;
	}
	.empty{
		margin: 10rpx;
		height: 10rpx;
	}
	.nickName{
		margin-top: 15rpx;
		font-family:'Times New Roman', Times, serif;
		font-weight: 600;
		color: rgba(32, 41, 41, 0.76);
	}
	.arrow-right-icon{
		margin: 50rpx;
		position: relative;
		left: 10%;
	}
	.person{
		display: flex;

	}
</style>
