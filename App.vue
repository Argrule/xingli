<script>
	import { mapMutations } from 'vuex';
	export default {
		async onLaunch() {			
			console.log('App Launch,判断是否已登录');
			const { data:res } =await uni.$http.get('/user/info')
			console.log('res',res);
			if(res.code=='00000'){
			// 获取默认个人信息
			this.changeAvatarUrl(res.data.avatarUrl);
			this.changeGender(res.data.gender);
			this.changeUserName(res.data.userName);
			this.changeEmail(res.data.email);
			uni.switchTab({ url: '/pages/personalMain/personalMain' })
			}else{
				uni.navigateTo({ url: '/pages/login/login' })
			}			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			...mapMutations('m_personal',['changeUserId','changeUserName','changeEmail','changeGender','changeAvatarUrl']),
		}
	}
</script>

<style lang="scss">
/*每个页面公共css */
@import "@/uni_modules/uview-ui/index.scss";
@import "@/static/iconfont.css";
page {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
    Segoe UI, Arial, Roboto, "PingFang SC", "miui", "Hiragino Sans GB",
    "Microsoft Yahei", sans-serif;
}
</style>
