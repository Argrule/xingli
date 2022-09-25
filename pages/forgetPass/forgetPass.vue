<template>
	<!-- 加载背景图，注这样才生效 -->
	<view class="content" style="background-image: url('../../static/login.jpg');background-size: 100% 100%;">
		<form class="form_content">		
		<view class="title"><view style="font-size:50rpx;color:white;font-weight:500;">修改密码</view></view>
		<view class="title">
		<input class="uni-input" maxlength="20" type="password" v-model="oldPassword" placeholder="请输入旧密码" />		
		<input class="uni-input" maxlength="20" type="password" v-model="newPassword" placeholder="请输入新密码" />	
		<input class="uni-input" maxlength="20" type="password" v-model="checkNewPassword" placeholder="请确认新密码" />	
		</view>
		<button class="login-button" size="mini" @click="beforeChange">确认</button>			
		</form>		
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				// 邮箱密码，待校验
				oldPassword:'114514',
				newPassword:'1145141919',
				checkNewPassword:'1145141919'
			};
		},
		methods:{			
			// 修改
			beforeChange(){
				let passWordType = /[\w\W]{6,}/;
				if (!passWordType.test(this.oldPassword)) {						
					return uni.$showMsg("旧密码格式错误");
				}
				if (!passWordType.test(this.newPassword)) {						
					return uni.$showMsg("请输入至少六位密码");
				}
				if (this.newPassword!=this.checkNewPassword) {		
					return uni.$showMsg("两次密码不相同");
				}						
				this.changePass();
			},
			// 发登录请求
			async changePass(){
				const { data:res } = await uni.$http.post('/login/password',{
					oldPassword:this.oldPassword,
					newPassword:this.newPassword
				})
				if (res.code=='00000') {
					uni.$showMsg('修改成功');					
				}else{
					return uni.$showMsg(res.message);
				}				
				uni.switchTab({
					url:'../personalMain/personalMain'
				});
			},			
		}
	}
</script>

<style lang="less">
// 忘记密码
.fontBody{
	margin:0rpx 15rpx;
	color: #fff;
	font-size: 30rpx;
	// border: 2rpx solid #fff;
}
// 我已阅读并同意
.cue {	
	transform:scale(0.5);
	color: rgb(220, 223, 229);
	// font-size: 37rpx;
	// border-radius: 100rpx;
	// text-align: right;
	// margin: 10rpx 0rpx 10rpx 0rpx;
}
.xieyi{
	font-size: 25rpx;	
	// color: rgba(26, 113, 185, 100);	
	color: rgb(220, 223, 229);		
	margin: 10rpx 0rpx 0rpx 0rpx;		
}
.form_content{
	// margin: 0 auto;
	display: flex;
	// 给父元素加高度，flex的space-around才能分空间
	height: 100vh;
	flex-direction: column;
	justify-content: space-around;
	// align-content: center;
}
.content{	
	// margin: auto auto;	
	height: 100%;
	text-align: center;
}
.select{
	margin-top: 15rpx;
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
	text-align: left;
	padding: 10rpx;
	display: block;	
	font-size: 30rpx;
	border: 1px #fff solid;
	background-color: #fff;
	width: 500rpx;
	margin: 55rpx auto;
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
</style>
