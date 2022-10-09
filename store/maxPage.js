export default {
	// 为当前模块开启命名空间
	namespaced: true,

	// 模块的 state 数据
	state: () => ({
        // diary list页数
		diaryPage:1,
        // todo list页数
        todoPage:1,
        // hollow list页数
        hollowPage:1,
	}),
 
	// 模块的 mutations 方法
	mutations: {		
		changeDiaryPage(state, payload) {            			
			console.log('changeDiaryPage in maxPage.js,payload is',payload);
            state.diaryPage = payload;
		},
		changeTodoPage(state, payload) {
            console.log('changeTodoPage in maxPage.js,payload is',payload);
			state.todoPage = payload			
		},
		changeHollowPage(state, payload) {
			state.hollowPage = payload			
		},	
	},

	// 模块的 getters 属性
	getters: {},
}