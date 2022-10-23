export default {
	// 为当前模块开启命名空间
	namespaced: true,
	state() {
		return {
			// 与医生交流的id
			advisoryId: 1
		}
	},
	mutations: {
		setAdvisoryId(state, advisoryId) {
			state.advisoryId = advisoryId
		}
	}
}
