class wsRequest {

    constructor(url, time) {
        this.status = null; // websocket是否关闭
        this.lockReconnect = false //避免重复连接
        this.url = url

        //心跳检测
        this.timeout = time //多少秒执行检测
        this.timeoutObj = null //检测服务器端是否还活着
        this.reconnectTimeOutObj = null //重连之后多久再次重连

        try {
            return this.initRequest()
        } catch (e) {
            console.log('catch');
            this.reconnect();
        }
    }

    initRequest() {
        this.socketTask = uni.connectSocket({
            url: this.url, //接口地址
            success: () => {
                console.log('连接成功');
                // 返回实例
                return this.socketTask
            }
        })

        this.socketTask.onOpen(res => {
            console.log(res, '连接打开');
            // 清除重连定时器
            clearTimeout(this.reconnectTimeOutObj)
            // 开启检测
            this.start()

        })

        // 如果希望websocket连接一直保持，在close或者error上绑定重新连接方法。
        this.socketTask.onClose((res) => {
            console.log(res, '连接关闭');
            this.reconnect();
        })

        this.socketTask.onError((res) => {
            console.log(res, '连接错误');
            this.reconnect();
        })

        this.socketTask.onMessage(res => {
            //接受任何消息都说明当前连接是正常的
            this.reset();
            console.log(res, 'pong');
        })

    }
    // 发信息
    send(value) {
        this.socketTask.send({
            data: value,
        })
    }

    // reset和start方法主要用来控制心跳的定时。
    reset() {
        // 清除定时器重新发送一个心跳信息
        clearTimeout(this.timeoutObj);
        this.start();
    }
    start() {
        this.timeoutObj = setTimeout(() => {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            console.log('ping');          
            this.socketTask.send({ data: JSON.stringify({ message: 'ping' }) });

        }, this.timeout)
    }

    // 重连
    reconnect() {
        // 防止多个方法调用，多处重连
        if (this.lockReconnect) {
            return;
        };
        this.lockReconnect = true;

        console.log('准备重连');

        //没连接上会一直重连，设置延迟避免请求过多
        this.reconnectTimeOutObj = setTimeout(() => {
            // 重新连接
            this.initRequest()

            this.lockReconnect = false;
        }, 4000);
    }

    // 手动关闭
    close() {
        this.socketTask.close()
    }
}

module.exports = wsRequest