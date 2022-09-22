<template>
  <view class="content">
    <view class="text-area">
      <view>
        <u-alert title="hello" type="warning" description="欢迎登录"></u-alert>
        <u-button size="normal" type="warning" @click="gologin"
          >登录页</u-button
        >
      </view>
    </view> 
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {
    async gologin() {
      const { data:res }= await uni.$http.post('/login/register',{
        userName:'刘荣',
        email:'2039858744@qq.com',
        password:'1145141919'
      });
      console.log('message',res.message);
      // uni.$showMsg(res.message);
      uni.navigateTo({
        url: "../login/login",
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
