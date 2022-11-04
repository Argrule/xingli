import Vue from "vue";
import Vuex from "vuex";
import moduleUser from "./user.js";
import moduleSign from "./sign.js";
// 与医生聊天
import moduleDChat from "./docChat.js";
// 个人信息
import modulePersonal from "./personal.js";
// 最大页数
import modulePage from "./maxPage.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    m_user: moduleUser,
    m_sign: moduleSign,
    // 与医生聊天
    m_dchat: moduleDChat,
    // 个人信息
    m_personal: modulePersonal,
    // 最大页数
    m_page: modulePage,
  },
});
export default store;
