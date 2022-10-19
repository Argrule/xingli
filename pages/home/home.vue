<template>
  <view class="background">
    <u-sticky bgColor="#fff">
      <view style="height: calc(6vh)"></view>
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
            <label :for="'link' + index">
              <u--image
                :src="item.photoUrl"
                radius="10rpx"
                width="200rpx"
                height="250rpx"
              ></u--image>
            </label>
          </view>
          <!-- link中图片和标签失效，纯文字才能生效 -->
          <uni-link
            :href="item.resourceUrl"
            showUnderLine="false"
            :id="'link' + index"
          >
            {{ item.introduce }}
            <!-- <view class="bookContent">{{ item.introduce }}</view> -->
          </uni-link>
        </view>
      </view>
      <view class="title"> 视频推荐 </view>
      <view v-for="(item, i) in videoList" :key="i">
        <view class="videoList">
          <!-- 视频图片 -->
          <image
            :src="item.url"
            style="
              width: 320rpx;
              height: 178rpx;
              background-color: #eeeeee;
              margin-left: 15rpx;
            "
            mode="aspectFit"
          ></image>
          <view class="videoContent">
            <!-- 视频标题 -->
            <view class="videoTitle">
              {{ item.description }}
            </view>
            <view class="videoView">
              <uni-link :href="item.resourceUrl" color="black" showUnderLine="false">
                点击观看
              </uni-link>
              <u-icon name="play-circle" size="18" color="black"></u-icon>
            </view>
          </view>
        </view>
      </view>
      <view style="height: 1rpx"></view>
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
        // {
        //   id: 0,
        //   name: "鸟哥的linux私房菜",
        //   author: "鸟哥",
        //   introduce:
        //     "为Linux新手而写，基于CentOS7.x,同时适用于各种常见版本的Linux",
        //   photoUrl:
        //     "https://ts1.cn.mm.bing.net/th/id/R-C.b3b9657667d6e02e444556c3b789d530?rik=q%2bnI4l1KvaOOFg&riu=http%3a%2f%2fbooklibimg.kfzimg.com%2fdata%2fbook_lib_img_v2%2fisbn%2f0%2f4fe3%2f4fe366f82a6abd7e23843105553db4c0_0_0_0_0_water.jpg&ehk=vkRzdlxhwDP2gQiUKjGlGxVZduZ6YU43At4OWmeSNsU%3d&risl=&pid=ImgRaw&r=0",
        //   resourceUrl: "https://www.linuxidc.com/Linux/2017-03/141744.htm",
        // },
        // {
        //   id: 1,
        //   name: "鸟哥的linux私房菜",
        //   author: "鸟哥",
        //   introduce:
        //     "为Linux新手而写，基于CentOS7.x,同时适用于各种常见版本的Linux",
        //   photoUrl:
        //     "https://ts1.cn.mm.bing.net/th/id/R-C.a7237de7f1f05d56f76284c36070eef6?rik=T31uqSYxULAEWA&riu=http%3a%2f%2fww1.sinaimg.cn%2flarge%2f006VHXWOly1fo7zgwzxz6j30g40mrq4f.jpg&ehk=LV4KghigDzkDAx9al3ykxDs2pUZ1XOfjGEFbm7vFW5k%3d&risl=&pid=ImgRaw&r=0",
        //   resourceUrl: "https://www.linuxidc.com/Linux/2017-03/141744.htm",
        // },
        // {
        //   id: 1,
        //   name: "鸟哥的linux私房菜",
        //   author: "鸟哥",
        //   introduce:
        //     "为Linux新手而写，基于CentOS7.x,同时适用于各种常见版本的Linux",
        //   photoUrl:
        //     "https://ts1.cn.mm.bing.net/th/id/R-C.a7237de7f1f05d56f76284c36070eef6?rik=T31uqSYxULAEWA&riu=http%3a%2f%2fww1.sinaimg.cn%2flarge%2f006VHXWOly1fo7zgwzxz6j30g40mrq4f.jpg&ehk=LV4KghigDzkDAx9al3ykxDs2pUZ1XOfjGEFbm7vFW5k%3d&risl=&pid=ImgRaw&r=0",
        //   resourceUrl: "https://www.linuxidc.com/Linux/2017-03/141744.htm",
        // },
      ],
      // 视频列表
      videoList: [
        {
          url: "../../static/screen1.png",
          description: "大学生心理健康教育",
          resourceUrl:'https://www.bilibili.com/video/BV1u5411P7yS/?spm_id_from=333.337.search-card.all.click&vd_source=3125029dccaa6183b8bd3feaa82d2648'          
        },
        {
          url: "../../static/screen2.png",
          description: "心理健康教育课",
          resourceUrl:'https://www.bilibili.com/video/BV14V411j7HB/?spm_id_from=333.337.search-card.all.click&vd_source=f2931028eb696609d18762d6348e840d'
        },
        {
          url: "../../static/screen3.png",
          description: "教你如何保持心理健康",
          resourceUrl:'https://www.bilibili.com/video/BV1eV4y1u7P8/?spm_id_from=333.337.search-card.all.click&vd_source=3125029dccaa6183b8bd3feaa82d2648'
        },
      ],
    };
  },
  components: {
    myTest,
  },
  created() {
    console.log("home start in home.vue");
    this.getBookList();
  },
  methods: {
    // 获取书单
    async getBookList(thepage = 1) {
      const { data: res } = await uni.$http.get("/recommend/books", {
        page: thepage,
      });
      console.log("// 获取书单", res.data);
      this.bookList = res.data;
    },
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
.videoList {
  font-size: 30rpx;
  height: 200rpx;
  background: #fff;
  margin: 40rpx 40rpx;
  padding: 15rpx 15rpx;
  border-radius: 30rpx;
  box-shadow: 0px 2px 8px rgb(109, 109, 109);
  display: flex;
  align-items: center;
  // justify-content: space-around;
}
.move_image {
  position: relative;
  top: -30%;
  left: 20rpx;
  margin-right: 30rpx;
  box-shadow: 0px -2px 8px rgb(109, 109, 109);
}
.videoContent {
  margin-left: 30rpx;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: center;
  .videoTitle {
    font-size: 35rpx;
    font-weight: 600;
  }
  .videoView {
    width: 180rpx;
    border-radius: 15rpx;
    padding: 15rpx;
    font-size: 34rpx;
    background-color: #f6b4a6;
    display: flex;
    align-items: center;
  }
}
.functionOptions {
  margin-top: -70rpx;
}
/deep/ .u-tabs {
  margin-top: 60rpx;
  align-items: center;
  // background-color: aqua;
}
</style>
