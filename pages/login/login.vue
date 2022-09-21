<template>
	<!-- 加载背景图，注这样才生效 -->
	<view class="content" style="background-image: url('../../static/login.jpg');background-size: 100% 100%;">
		<form class="form_content">			
		<!-- 名字，待修改 -->
		<view class="title"><view style="font-size:50rpx;color:white;font-weight:500;">名字</view></view>
		<view class="title">
		<input class="uni-input" maxlength="11" type="number" v-model="email" placeholder="请输入邮箱账号" />		
		<input class="uni-input" maxlength="10" type="text" v-model="passWord" placeholder="请输入密码" />
		<view class="displayBox">
			<view class="fontBody" @click="forgetPass">忘记密码</view>
			<view class="fontBody" @click="registerAccount">注册账号</view>
		</view>
		</view>
		<view class="select">
			<checkbox class="cue" v-model="isPermited" @change="changeiIsPermited">我已阅读并同意</checkbox>
			<view class="xieyi" @click="showProvacy">《用户协议及隐私政策》</view>
		</view>
		<button class="login-button" size="mini" @click="login">登录</button>				
		</form>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 邮箱密码，待校验
				email:'',
				passWord:'',
				// 是否同意协议
				isPermited:'',		
			};
		},
		methods:{			
			// 勾选或取消同意协议
			changeiIsPermited(){
				if (this.isPermited) {
					this.isPermited=0;
				} else {
					this.isPermited=1;
				}
			},
			// 登录
			login(){
				console.log('isPermited:',this.isPermited)
				// if (this.isPermited) {
					
				// } else {
					
				// }
				// alert('hello');
				console.log('hello',this.email,this.passWord);
			},
			// 
			getIdentityCode(){
				// alert('getIdentityCode');
				console.log('getIdentityCode');
			},
			// 忘记密码页面
			forgetPass(){
				// alert('forgetPass');
				uni.navigateTo({
					url:'../forgetPass/forgetPass'
				})
			},
			// 注册页面
			registerAccount(){
				// alert('registerAccount');
				uni.navigateTo({
					url:'../register/register'
				})
			},
			// 展示隐私政策
			showProvacy(){
				// alert('showProvacy')
				console.log('showProvacy')
			}
		}
	}
</script>

<style lang="less">
.fontBody{
	margin:10rpx 10rpx;
	color: #fff;
	font-size: 24rpx;
	// border: 2rpx solid #fff;
}
.cue {	
	transform:scale(0.7);
	color: rgb(220, 223, 229);
	text-align: center;
	// margin: 10rpx 0rpx 10rpx 0rpx;
}
.xieyi{
	font-size: 24rpx;	
	// color: rgba(26, 113, 185, 100);	
	color: rgb(220, 223, 229);	
	// text-align: center;
	margin: 15rpx 1rpx 0rpx 0rpx;	
}
// .form_content{
	// margin: 0 auto;
	// display: flex;
	// align-content: center;
// }
.submit {
			display: flex;
			margin-top: 40rpx;
			margin-bottom: 40rpx;
			justify-content: center;
			transform: translateY(-10rpx);
			align-items: center;
			font-weight: 600;
			letter-spacing: 1px;
			width: 100%;
			button {
				color:#fff;
				width: 100%;
				border-radius: 50rpx;
				background-color: #008bd0;
			}
		}
.content{
	// display: flex;
	// justify-content: center;
	// align-items: center;

	// margin: auto auto;	
	height: 100%;
	text-align: center;
}
.select{
	margin-top: 50rpx;
	display: flex;
	justify-content: center;
	// align-items: center;
}
.displayBox{
	display: flex;
	justify-content: center;
}
.IDCode-button{
	width: 150rpx;
	height: 50rpx;
	font-size: 8rpx;
	position: relative;
	left: 150rpx;
}
.uni-input{
	display: block;	
	border: 1px #fff solid;
	background-color: #fff;
	width: 500rpx;
	margin: 15rpx auto;
	border-radius: 8rpx;
}
.login-button{
	width: 300rpx;
	// height: 200rpx;
	margin: 15rpx;	
	color:#fff;
	// width: 100%;
	border-radius: 50rpx;
	background-color: rgb(251, 194, 166);
	// background-color: red;
}
// .title{
	// display: flex;
	// justify-content: center;
	// align-items: center;
	// align-content: center;
// }
</style>
