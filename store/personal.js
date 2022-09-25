export default {
	// 为当前模块开启命名空间
	namespaced: true,

	// 模块的 state 数据
	state: () => ({
		userId: 0,		
	}),
 
	// 模块的 mutations 方法
	mutations: {		
		changeUserId(state, payload) {
            console.log(payload);
			if(payload){
				state.userId = payload				
			}
		},
	},

	// 模块的 getters 属性
	getters: {},
}