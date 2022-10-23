// let my_token = uni.getStorageSync("token");
// this.socket = websoket_ai.init(0, my_token);
// // 打开事件
// this.socket.onopen = function () {
//   console.log("websocket已打开");
// };
// // 浏览器端接收服务器发来的消息
// this.socket.onmessage = function (msg) {
//   console.log("收到数据：");
//   console.log(msg.data);
// };
// // 关闭事件
// this.socket.onclose = function () {
//   console.log("websocket已关闭");
// };
// //异常事件
// this.socket.onerror = function () {
//   console.log("websocket发生了错误");
// };
export default {
    // 判断是否已连接
    checkOpenSocket() {
        let self = this;
        uni.sendSocketMessage({
            data: 'ping',
            success: (res) => {
                return;
            },
            fail: (err) => { // 未连接打开websocket连接
                self.openConnection();
            }
        });
    },

    openConnection() { // 打开连接
        uni.closeSocket(); // 确保已经关闭后再重新打开
        uni.connectSocket({
            // 【非常重要】必须确保你的服务器是成功的            
            url: "ws://ainame.xyz:38080/advisory/chat?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VySW5mbyI6IntcInVzZXJJZFwiOjIsXCJ1c2VyTmFtZVwiOlwi5YiY6I2jXCJ9IiwiZXhwIjoxNjY2NjE5Mjc2fQ.PfIJhLQH8JzykCBPq7wU7qO2oZgRxfgbrwgH2hm31-zGE1aR4lEaU512822AVlk4FWQMWDhhdyS3jlKAsPQHwg&advisoryId=0",
            success(data) {
                console.log(data);
                console.log("websocket正在连接...");
            },
        });

        // 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
        uni.onSocketOpen(function (res) {
            console.log('WebSocket连接成功');
        });
        //连接成功后如果有服务器返回的消息 先接收
        this.onSocketMessage(2);
    },

    //	打开成功监听服务器返回的消息
    onSocketMessage(type = 1) { // 消息
        this.timeout = 60000;
        this.timeoutObj = null;
        uni.onSocketMessage((res) => {
            let giveMsg = res.data;

            // 后台绑定client_id
            // 如果返回有数据 转换
            if (giveMsg) {
                let msg = JSON.parse(giveMsg);
                if (msg.type === 'init' || type === 2) {
                    console.log("判断是否有数据" + giveMsg)
                    let clientId = msg.client_id;
                    let userId = uni.getStorageSync('userInfo');
                    let para = { client_id: clientId, userId: userId };
                    console.log("触发心跳")
                    this.reset();

                }
            }
            // 如果没连接成功服务器并没有返回数据
            this.getSocketMsg(res.data); // 监听到有新服务器消息
        });
    },
    // 监听到有新服务器消息 将数据弹出在聊天框中
    getSocketMsg(reData) { // 监听到服务器消息
        console.log('监听到服务器消息 reData=', reData);
        let info = JSON.parse(reData);
        if (info.type === 'notice') {
            console.log(info);
            // let options = {cover: false, title: info.time};
            // // #ifdef APP-PLUS
            // plus.push.createMessage(info.content, info, options); // 弹出到状态栏中
            // // #endif
        }
        console.log('app onMessage=', reData)
    },


    // 检测心跳reset
    reset() {
        learInterval(this.timeoutObj);
        this.start(); // 启动心跳
    },

    // 启动心跳 start 
    start() {
        let self = this;
        this.timeoutObj = setInterval(function () {
            uni.sendSocketMessage({
                data: 'ping',
                success: (res) => {
                    console.log('连接中....成功');
                    console.log(res);
                },
                fail: (err) => {
                    console.log('连接失败重新连接....');
                    self.openConnection();
                }
            });
        }, this.timeout);
    },
    // 关闭聊天
    uplade() {
        uni.closeSocket(); // WebSocket
        uni.onSocketClose(function (res) {
            console.log('WebSocket 已关闭！');
        });
    },

    // 发送文字消息
    sendText() {
        this.hideDrawer();//隐藏抽屉
        if (!this.textMsg) {
            return;
        }
        uni.sendSocketMessage({
            data: this.textMsg,
            success(res) {
                console.log(res);
                console.log("消息发送成功");
            }
        });
        let content = this.replaceEmoji(this.textMsg);
        let msg = { text: content }
        this.sendMsg(msg, 'text');
        this.textMsg = '';//清空输入框
    },
}
