export default {
	// 为当前模块开启命名空间
	namespaced: true,
	state() {
		return {
			// 与医生交流
			advisoryId: 1,//id
			docAvatarUrl: 'https://cdn.uviewui.com/uview/album/3.jpg',//头像
		}
	},
	mutations: {
		setAdvisoryId(state, advisoryId) {
			console.log('已获取医生交流的id in docChat.js', advisoryId);
			state.advisoryId = advisoryId
		},
		setDocAvatarUrl(state, docAvatarUrl) {
			console.log('已获取医生的头像 in docChat.js', docAvatarUrl);
			state.docAvatarUrl = docAvatarUrl
		}
	}
}
