<template>
	<!-- 加载背景图，注这样才生效 -->
	<view class="content" style="background-image: url('../../static/login.jpg');background-size: 100% 100%;">
		<form class="form_content">			
		<!-- 名字，待修改 -->
		<view class="title"><view style="font-size:50rpx;color:white;font-weight:500;">login</view></view>
		<view class="title">
		<input class="uni-input" maxlength="10" type="number" v-model="userName" placeholder="请输入用户名" />		
		<input class="uni-input" maxlength="15" type="password" v-model="passWord" placeholder="请输入密码" />
		<view class="displayBox">
			<view class="fontBody" @click="forgetPass">忘记密码</view>
			<view class="fontBody" @click="registerAccount">注册账号</view>
		</view>
		</view>
		<view class="select">
			<checkbox class="cue" @click="changeiIsPermited"></checkbox>
			<view class="xieyi">我已阅读并同意</view>
			<view class="xieyi" @click="showProvacy">《用户协议及隐私政策》</view>
		</view>
		<button class="login-button" size="mini" @click="beforeLogin">登录</button>			
		</form>		
	</view>
</template>

<script>	
	import { mapMutations } from 'vuex';
	export default {
		data() {
			return {
				// 邮箱密码，待校验
				userName:'刘荣',
				passWord:'1145141919',
				// 是否同意协议
				isPermited:false,		
			};
		},
		methods:{
			...mapMutations('m_personal',['changeUserId']),
			// 勾选或取消同意协议
			changeiIsPermited(){						
				if (this.isPermited) {
					this.isPermited=false;
				} else {
					this.isPermited=true;
				}
			},
			// 登录
			beforeLogin(){								
				if (this.isPermited) {
					// 校验
					// let emailType = /[\s\S]+@[\w\W]+/;
					let passWordType = /[\w\W]{6,}/;					
					// if (!emailType.test(this.email)) {						
					// 	return uni.$showMsg("请输入正确的邮箱格式");
					// }
					if (this.userName=='') {
						return uni.$showMsg("请输入用户名");
					}							
					if (!passWordType.test(this.passWord)) {						
						return uni.$showMsg("请输入至少六位密码");
					}
					// uni.$showMsg('登录成功');
					// 登录请求
					this.login();
				} else {
					return uni.$showMsg("请同意隐私协议");
				}				
			},
			// 发登录请求
			async login(){
				const { data:res } = await uni.$http.post('/login/login',{
					userName:this.userName,
					password:this.passWord
				})
				if (res.code=='00000') {
					uni.$showMsg('登录成功');
					// 更新ID
					this.changeUserId(res.data.userId);
				}else{
					return uni.$showMsg(res.message);
				}
				// console.log('res',res);
				uni.switchTab({
					url:'../personalMain/personalMain'
				});
				this.afterLogin();
			},
			async afterLogin(){
				const { data:res } =await uni.$http.get('/user/info')
				console.log('res',res);
			},
			// 获取验证码，未完善
			getIdentityCode(){				
				console.log('getIdentityCode');
			},
			// 忘记密码页面
			forgetPass(){				
				uni.navigateTo({
					url:'../forgetPass/forgetPass'
				})
			},
			// 注册页面
			registerAccount(){				
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
// 忘记密码、注册账号
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
