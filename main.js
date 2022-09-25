import App from './App'
import { uni } from "./apis/request/request";
import store from "./store";

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
// 引入uview
import uView from '@/uni_modules/uview-ui'
Vue.use(uView);
const app = new Vue({
    store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
// import { createSSRApp } from 'vue'
// 引入uview
// import uView from '@/uni_modules/uview-ui'
// Vue.use(uView);
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// #endif