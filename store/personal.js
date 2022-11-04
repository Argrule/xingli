export default {
	// 为当前模块开启命名空间
	namespaced: true,

	// 模块的 state 数据
	state: () => ({
		userId: 0,
		userName: '',
		email: '',
		gender: 0,//男1女0
		avatarUrl: '',
	}),
 
	// 模块的 mutations 方法
	mutations: {		
		changeUserId(state, payload) {            			
			state.userId = payload			
		},
		changeUserName(state, payload) {
			state.userName = payload			
		},
		changeEmail(state, payload) {
			state.email = payload			
		},
		changeGender(state, payload) {
			state.gender = payload
		},
		changeAvatarUrl(state, payload) {			
			state.avatarUrl = payload			
		},
	},

	// 模块的 getters 属性
	getters: {},
}