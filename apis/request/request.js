import {
	$http
} from "./index.js";
// 封装的展示消息提示的方法
uni.$showMsg = function(title = "数据加载失败！", duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: "none",
	});
};

// 封装uni挂载发送的请求
uni.$http = $http;
$http.baseUrl = 'http://101.43.183.202:38080'
$http.beforeRequest = function(options) {
	var header = {
		Authorization: wx.getStorageSync("token"), //读取本地保存好的上一次cookie
	};
	options.header = header;
	uni.showLoading({
		title: "加载中...",
	});
};
$http.afterRequest = function() {
	uni.hideLoading();
};
