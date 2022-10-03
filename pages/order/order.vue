<template>
  <view>
    <!-- 搜索框 -->
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
    </u-sticky>
    <!-- 头部 -->
    <view class="headPart">
      <view class="title">心理咨询</view>
      <!-- 跳转聊天界面 -->
      <view class="chatIcon">
        <u-icon name="chat" color="#DC8C6B" size="35"></u-icon>
      </view>
    </view>
    <!-- 医生列表 -->
    <view>
      医生列表
      <view style="display: flex; justify-content: space-around">
        <view class="docotorListLeft">
          <view v-for="(item, index) in docotorList1" :key="index">
            <view class="TextLeft">
              <u-avatar
                size="60"
                :src="item.avatarUrl"
                shape="circle"
              ></u-avatar>
              <view> {{ item.name }} </view>
            </view>
          </view>
        </view>
        <view class="docotorListRight">
          <view v-for="(item, index) in docotorList2" :key="index">
            <view class="TextRight">
              <u-avatar
                size="60"
                :src="item.avatarUrl"
                shape="circle"
              ></u-avatar>
              <view> {{ item.name }} </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      // 左列
      docotorList1: [
        {
          id: 0,
          name: "猫猫学长",
          avatarUrl: "https://cdn.uviewui.com/uview/album/1.jpg",
          goodat: "亲子关系",
        },
        {
          id: 1,
          name: "猫猫学姐",
          avatarUrl: "https://cdn.uviewui.com/uview/album/2.jpg",
          goodat: "婚姻关系",
        },
      ],
      // 右列
      docotorList2: [
        {
          id: 3,
          name: "大熊猫",
          avatarUrl: "https://cdn.uviewui.com/uview/album/3.jpg",
          goodat: "恋爱关系",
        },
        {
          id: 4,
          name: "小熊猫",
          avatarUrl: "https://cdn.uviewui.com/uview/album/4.jpg",
          goodat: "校园关系",
        },
      ],
    };
  },
  methods: {
    searchKeyWord() {
      console.log("searchKeyWord =", this.keyword);
    },
  },
};
</script>

<style lang="less">
.headPart {
  display: flex;
  position: relative;
}
.title {
  font-size: 36rpx;
  font-weight: 600;
  margin: 30rpx 0 10rpx 0;
  border-left: 8rpx solid #f6b4a6;
  padding-left: 20rpx;
}
.chatIcon {
  margin: 30rpx 0 10rpx 0;
  position: absolute;
  right: 5%;
}
// .docotorListLeft{
// 	width: 45%;
// }
// .docotorListRight{
// 	width: 45%;
// }
</style>
