<template>
  <view class="background">
    <u-sticky bgColor="#fff">
      <view style="height:calc(6vh)"></view>
      <u-search        
        height="25"
        :clearabled="false"
        v-model="keyword"
        margin="0rpx 50rpx"
        :showAction="false"
        @search="searchKeyWord"
      ></u-search>
      <view class="functionOptions">
        <u-tabs
          lineColor="#FBC2A6"
          @click="changeFunctionOptions"
          :list="[
            {
              name: '推荐',
            },
            {
              name: '测试',
            },
          ]"
        ></u-tabs>
      </view>
    </u-sticky>
    <view v-if="FunctionOptions">
      <view class="title"> 精选书单 </view>
      <view v-for="(item, index) in bookList" :key="index">
        <view class="bookList">
          <!-- 封面 -->          
          <view class="move_image">
            <label :for="'link'+index">
            <u--image
              :src="item.photoUrl"
              width="200rpx"
              height="250rpx"
            ></u--image>
            </label>
          </view>          
          <!-- link中图片和标签失效，纯文字才能生效 -->
          <uni-link :href="item.resourceUrl" showUnderLine="false" :id="'link'+index">
            {{ item.introduce }}
            <!-- <view class="bookContent">{{ item.introduce }}</view> -->
          </uni-link>
        </view>
      </view>
      <view class="title"> 视频推荐 </view>
      <view>
        <view class="bookList">{{ dateContent }}</view>
        <view class="bookList">{{ dateContent }}</view>
        <view class="bookList">{{ dateContent }}</view>
      </view>
    </view>
    <view v-else>
      <my-test></my-test>
    </view>
  </view>
</template>

<script>
import myTest from "../../mycomponents/my-test.vue";
export default {
  data() {
    return {
      // 导航
      FunctionOptions: true,
      // 关键字搜索
      keyword: "",
      // 书单
      bookList: [
        {
          id: 0,
          name: "鸟哥的linux私房菜",
          author: "鸟哥",
          introduce:
            "为Linux新手而写，基于CentOS7.x,同时适用于各种常见版本的Linux",
          photoUrl:
            "https://ts1.cn.mm.bing.net/th/id/R-C.b3b9657667d6e02e444556c3b789d530?rik=q%2bnI4l1KvaOOFg&riu=http%3a%2f%2fbooklibimg.kfzimg.com%2fdata%2fbook_lib_img_v2%2fisbn%2f0%2f4fe3%2f4fe366f82a6abd7e23843105553db4c0_0_0_0_0_water.jpg&ehk=vkRzdlxhwDP2gQiUKjGlGxVZduZ6YU43At4OWmeSNsU%3d&risl=&pid=ImgRaw&r=0",
          resourceUrl: "https://www.linuxidc.com/Linux/2017-03/141744.htm",
        },
        {
          id: 1,
          name: "鸟哥的linux私房菜",
          author: "鸟哥",
          introduce:
            "为Linux新手而写，基于CentOS7.x,同时适用于各种常见版本的Linux",
          photoUrl:
            "https://ts1.cn.mm.bing.net/th/id/R-C.a7237de7f1f05d56f76284c36070eef6?rik=T31uqSYxULAEWA&riu=http%3a%2f%2fww1.sinaimg.cn%2flarge%2f006VHXWOly1fo7zgwzxz6j30g40mrq4f.jpg&ehk=LV4KghigDzkDAx9al3ykxDs2pUZ1XOfjGEFbm7vFW5k%3d&risl=&pid=ImgRaw&r=0",
          resourceUrl: "https://www.linuxidc.com/Linux/2017-03/141744.htm",
        },
        {
          id: 1,
          name: "鸟哥的linux私房菜",
          author: "鸟哥",
          introduce:
            "为Linux新手而写，基于CentOS7.x,同时适用于各种常见版本的Linux",
          photoUrl:
            "https://ts1.cn.mm.bing.net/th/id/R-C.a7237de7f1f05d56f76284c36070eef6?rik=T31uqSYxULAEWA&riu=http%3a%2f%2fww1.sinaimg.cn%2flarge%2f006VHXWOly1fo7zgwzxz6j30g40mrq4f.jpg&ehk=LV4KghigDzkDAx9al3ykxDs2pUZ1XOfjGEFbm7vFW5k%3d&risl=&pid=ImgRaw&r=0",
          resourceUrl: "https://www.linuxidc.com/Linux/2017-03/141744.htm",
        },
      ],
    };
  },
  components: {
    myTest,
  },
  methods: {
    // 搜索
    searchKeyWord() {
      console.log(this.keyword);
    },
    // 改导航
    changeFunctionOptions(item) {
      console.log("hh", item);
      this.FunctionOptions = !item.index;
    },
  },
};
</script>

<style lang="less" scoped>
.background {
  background-color: rgb(246, 246, 246);
}
.title {
  font-size: 36rpx;
  font-weight: 600;
  margin: 30rpx 0 10rpx 0;
  border-left: 8rpx solid #f6b4a6;
  padding-left: 20rpx;
}
.bookList {
  font-size: 30rpx;
  height: 200rpx;
  background: #fff;
  margin: 80rpx 40rpx;
  padding: 15rpx;
  border-radius: 30rpx;
  box-shadow: 0px 2px 8px rgb(109, 109, 109);
  display: flex;
  // justify-content: space-around;
}
.move_image {
  position: relative;
  top: -30%;
  left: 20rpx;
  margin-right: 30rpx;
}
.functionOptions {
  margin-top: -70rpx;
}
/deep/ .u-tabs {
  margin-top: 50rpx;
  align-items: center;
  // background-color: aqua;
}
</style>
