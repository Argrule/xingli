export default {
	// 为当前模块开启命名空间
	namespaced: true,
	state() {
		return {
			detail: 1
		}
	},
	mutations: {
		setDetail(state, detail) {
			state.detail = detail
		}
	}
}
