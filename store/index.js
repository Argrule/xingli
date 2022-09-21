import Vue from "vue";
import Vuex from "vuex";
import moduleUser from "./user.js";
import moduleSign from "./sign.js";
import modulePrivate from "./private.js"

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		m_user: moduleUser,
		m_sign: moduleSign,
		m_private: modulePrivate,
	},
});
export default store;
