<template>
	<!-- 加载背景图，注这样才生效 -->
	<view class="content" style="background-image: url('../../static/login.jpg');background-size: 100% 100%;">
		<form class="form_content">			
		<!-- 名字，待修改 -->
		<view class="title"><view style="font-size:50rpx;color:white;font-weight:500;">注册</view></view>
		<view class="title">
		<input class="uni-input" maxlength="20" type="number" v-model="email" placeholder="请输入邮箱账号" />
		<input class="uni-input" maxlength="20" type="text" v-model="password" placeholder="请输入密码账号" />
		<input class="uni-input" maxlength="20" type="text" v-model="checkPassword" placeholder="请再次确认密码账号" />		
		<input class="uni-input" maxlength="15" type="text" v-model="checkWord" placeholder="请输入验证码" />
		<view class="displayBox">
			<view class="fontBody" @click="getIdentityCode">获取验证码</view>
		</view>
		</view>		
		<button class="login-button" size="mini" @click="beforeRegister">注册</button>			
		</form>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 邮箱、验证码，待校验
				email:'2039858744@qq.com',
				checkWord:'114519',	
				// 密码
				password: '123456',
				checkPassword: '123456',
			};
		},
		methods:{			
			// 注册
			beforeRegister(){												
				// 校验
				let emailType = /[\s\S]+@[\w\W]+/;
				let checkWordType = /[\w\W]{6,}/;					
				if (!emailType.test(this.email)) {						
					return uni.$showMsg("请输入正确的邮箱格式");
				}
				if (this.password!=this.checkPassword) {		
					return uni.$showMsg("两次密码不相同");
				}		
				if (!checkWordType.test(this.checkWord)) {						
					return uni.$showMsg("请输入正确验证码");
				}				
				// 注册请求
				this.register();										
			},
			// 发注册请求
			async register(){
				const { data:res }= await uni.$http.post('/login/register',{
					userName:'刘荣',
					email:this.email,
					password:this.checkWord
				});				
				if (res.code=='00000') {
					uni.$showMsg('注册成功');
				}else{
					return uni.$showMsg(res.message);
				}									
			},
			// 获取验证码
			getIdentityCode(){				
				console.log('getIdentityCode');
			},				
		}
	}
</script>

<style lang="less">
.fontBody{
	margin:0rpx 0rpx 20rpx 0rpx;
	position: relative;
	left: 63%;
	color: #fff;
	padding: 5rpx 10rpx;
	background-color: rgba(255, 255, 255, 0.295);
	font-size: 30rpx;	
	border-radius: 8rpx;
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
.displayBox{
	display: flex;
	justify-content: right;
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
	margin: 35rpx auto;
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
