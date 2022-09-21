export default {
	// 为当前模块开启命名空间
	namespaced: true,

	// 模块的 state 数据
	state: () => ({
		userName: '',
		imgUrl: '',
		msgSum: 0,
		// 默认未登录
		isLogin: false,
		// 默认未完善
		isCompleteMsg: false,
		infoList: [],
		haveInfo: false
	}),
 
	// 模块的 mutations 方法
	mutations: {
		changeIsLogin(state) {
			state.isLogin = !state.isLogin

		},
		changeIsCompleteMsg(state) {
			// state.isLogin=false
			state.isCompleteMsg = true
		},
		changeUserInfo(state, payload) {
			state.userName = payload.nickName,
			state.imgUrl = payload.avatarUrl

		},
		changemsgSum(state, payload) {
			if (payload) {
				console.log(payload);
				state.msgSum = payload
				// 设置消息主页条数
				uni.setTabBarBadge({
					index: 1,
					text: state.msgSum.toString()
				})
			}else{
				uni.removeTabBarBadge({
					index:1
				})
			}
		},
		changeInfoList(state, payload) {
			if(payload.msgList.length){
				state.haveInfo = true
				console.log(payload);
				state.infoList = payload.msgList
				console.log('info');
			}
		},
	},

	// 模块的 getters 属性
	getters: {},
}