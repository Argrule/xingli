<template>
  <view class="background">
    <u-sticky bgColor="#fff">
      <u-search
	  	class="u_search"
        height="10"
        :clearabled="false"
        v-model="keyword"
        margin="50rpx 30rpx 0rpx 30rpx"
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
      <view>
        <view class="bookList">
          <view class="move_image">
            <u--image
              :src="bookDetail[0].bookPicture"
              width="200rpx"
              height="250rpx"
            ></u--image>
          </view>
        </view>
        <view class="bookList">
          <view class="move_image">
            <u--image
              :src="bookDetail[1].bookPicture"
              width="200rpx"
              height="250rpx"
            ></u--image>
          </view>
          <view class="bookContent">{{ bookDetail[1].bookContent }}</view>
        </view>
      </view>
      <view class="title"> 网课推荐 </view>
      <view>
        <view class="bookList">{{ dateContent }}</view>
        <view class="bookList">{{ dateContent }}</view>
        <view class="bookList">{{ dateContent }}</view>
      </view>
    </view>
	<view v-else>
		hello
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
	// 导航
	FunctionOptions:true,
      // 关键字搜索
      keyword: "",
      //   图书
      bookDetail: [
        {
          // 图书简介
          bookContent: "",
          // 图书封面
          bookPicture: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          bookContent: "hhh",
          bookPicture: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
      ],
    };
  },
  methods: {
	// 搜索
    searchKeyWord() {
      console.log(this.keyword);
    },
	// 改导航
	changeFunctionOptions(item){
		console.log('hh',item);
		this.FunctionOptions=!item.index;
	},
  },
};
</script>

<style lang="less" scoped>
.background{
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
}
.functionOptions{
	margin-top: -70rpx;
}
/deep/ .u-tabs{	
	margin-top: 70rpx;
	align-items: center;	
	// background-color: aqua;
}
</style>
