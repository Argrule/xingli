import store from "@/store/index.js";
class Request {
  constructor(options = {}) {
    // 请求的根路径
    this.baseUrl = options.baseUrl || ''
    // 请求的 url 地址
    this.url = options.url || ''
    // 请求方式
    this.method = 'GET'
    // 请求的参数对象
    this.data = null
    // header 请求头
    this.header = options.header || {}
    this.beforeRequest = null
    this.afterRequest = null
  }

  get(url, data = {}) {
    this.method = 'GET'
    this.url = this.baseUrl + url
    this.data = data
    return this._()
  }

  post(url, data = {}) {
    this.method = 'POST'
    this.url = this.baseUrl + url
    this.data = data
    return this._()
  }

  put(url, data = {}) {
    this.method = 'PUT'
    this.url = this.baseUrl + url
    this.data = data
    return this._()
  }

  delete(url, data = {}) {
    this.method = 'DELETE'
    this.url = this.baseUrl + url
    this.data = data
    return this._()
  }

  _() {
    // 清空 header 对象
    this.header = {}
    // 请求之前做一些事
    this.beforeRequest && typeof this.beforeRequest === 'function' && this.beforeRequest(this)
    // 发起请求
    return new Promise((resolve, reject) => {
      let weixin = wx
      // 适配 uniapp
      if ('undefined' !== typeof uni) {
        weixin = uni
      }
      weixin.request({
        url: this.url,
        method: this.method,
        data: this.data,
        header: this.header,
        success: (res) => {
          let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
          let curRoute = routes[routes.length - 1].route; 
          if (res.data.code === '10003' && (curRoute !== 'pages/Sign/Sign' || curRoute !== 'pages/SignDetail/SignDetail' || curRoute !== 'pages/SignIntroduce/SignIntroduce')) {
            store._modules.root._children.m_user.isLogin = false
          } else {
            resolve(res)
          }
        },
        fail: (err) => { reject(err) },
        complete: (res) => {
          this.afterRequest && typeof this.afterRequest === 'function' && this.afterRequest(res)
        }
      })
    })
  }
}	

export const $http = new Request()