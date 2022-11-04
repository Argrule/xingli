export default {
	// 为当前模块开启命名空间
	namespaced: true,

	// 模块的 state 数据
	state: () => ({
		avatarUrl: '',
		name: '',
		entryId: '',
		tagStatus: '',
		startTime: '',
		endTime: '',
		time: '',
		messageName: '',
		// 重定向的页面
		redirectInfo: null,
		// 判断组织第一志愿是否已经选择
		firstSign: false,
		// 判断组织第二志愿是否已经填写
		secondSign: false,
	}),

	// 模块的 mutations 方法
	mutations: {
		setAvatarUrl(state, url) {
			state.avatarUrl = url
		},
		setName(state, name) {
			console.log(1,'name',name);
			// 置空
			state.messageName=''
			state.name = name
			console.log(state.name);
		},
		setEntryId(state, id) {
			state.entryId = id
		},
		setTagStatus(state, tagStatus) {
			state.tagStatus = tagStatus
		},
		setStartTime(state, val) {
			// if (startTime !== null) {
			// 	let newState = startTime.split('-');
			// 	let stateText = newState[1] + '.' + newState[2].split(':')[0] + ':' + newState[2].split(':')[1]
			// state.startTime = startTime
			// console.log('startTime', startTime);
			// console.log('state val =', val);
			// // }
		},
		setTime(state, val) {
			state.time = val

		},
		setEndTime(endTime) {
			// if(endTime !== null){
			// 	let newEnd = endTime.split('-');
			// 	let endText = newEnd[1] + '.' + newEnd[2].split(':')[0] + ':' + newEnd[2].split(':')[1]
			// state.endTime = endTime
			// console.log('endTime', endTime);
			// }
		},
		setMessageName(state, messageName) {
			state.messageName = messageName
		},
		// 设置页面标题
		setNavName(state, text) {
			console.log('messageName',state.messageName);
			console.log('name',state.name);
			uni.setNavigationBarTitle({
				title: (state.messageName || state.name) + '—' + text
			})
		},
		// 更新重定向的信息对象
		updateRedirectInfo(state, info) {
			state.redirectInfo = info
		}
	},

	// 模块的 getters 属性
	getters: {},
}
