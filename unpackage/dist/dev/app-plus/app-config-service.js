
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/register/register","pages/forgetPass/forgetPass","pages/personalMain/personalMain","pages/home/home","pages/order/order","pages/talk/talk","pages/changePersonInformation/changePersonInformation","pages/changePersonInformation/changeAvatarUrl","pages/changePersonInformation/changeUserName","pages/changePersonInformation/changeGender","mycomponents/my-puthollow/my-puthollow","pages/order/docotorChat","pages/waterfall/waterfall","pages/talk/chat"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","bounce":"none"},"tabBar":{"color":"#7A7E83","selectedColor":"#DC8C6B","borderStyle":"black","backgroundColor":"#ffffff","height":"60px","fontSize":"10px","spacing":"2px","iconWidth":"25px","list":[{"pagePath":"pages/home/home","iconPath":"static/home-01.png","selectedIconPath":"static/home-01.png","text":"首页"},{"pagePath":"pages/order/order","iconPath":"static/edit-01.png","selectedIconPath":"static/edit-01.png","text":"预约"},{"pagePath":"pages/talk/talk","iconPath":"static/talk-01.png","selectedIconPath":"static/talk-01.png","text":"诉心"},{"pagePath":"pages/personalMain/personalMain","iconPath":"static/mine-01.png","selectedIconPath":"static/mine-01.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"xingli","compilerVersion":"3.6.4","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/forgetPass/forgetPass","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/personalMain/personalMain","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#00ff00","enablePullDownRefresh":true,"navigationStyle":"custom"}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/order/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#ffffff","onReachBottomDistance":150}},{"path":"/pages/talk/talk","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":true,"onReachBottomDistance":150,"navigationStyle":"custom","pullToRefresh":{"support":true,"color":"#ff3333","style":"default","contentdown":{"caption":"下拉可刷新"},"contentover":{"caption":"释放可刷新"},"contentrefresh":{"caption":"正在刷新"}}}},{"path":"/pages/changePersonInformation/changePersonInformation","meta":{},"window":{"navigationBarTitleText":"个人信息修改","navigationBarBackgroundColor":"#F6B4A6","enablePullDownRefresh":false}},{"path":"/pages/changePersonInformation/changeAvatarUrl","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/changePersonInformation/changeUserName","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/changePersonInformation/changeGender","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/mycomponents/my-puthollow/my-puthollow","meta":{},"window":{"navigationBarTitleText":"我的故事","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F6B4A6"}},{"path":"/pages/order/docotorChat","meta":{},"window":{"navigationBarTitleText":"消息","enablePullDownRefresh":false}},{"path":"/pages/waterfall/waterfall","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/talk/chat","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
