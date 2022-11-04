<template>
  <view>
    <!-- 添加树洞 -->
    <view class="suspension">
      <u-icon
        name="plus-circle-fill"
        @click="gotoPutHollow"
        color="#FBC2A6"
        size="100rpx"
      ></u-icon>
    </view>
    <!-- 树洞消息，由于瀑布流无法实现，采用替代方案，后续尝试瀑布流 -->
    <!-- <view style="display: flex; justify-content: space-around">
      <view class="hollowTextLeft">
        <view v-for="(item, index) in hollowsList1" :key="index">          
          <view class="TextLeft">
            <view> {{ item.story }} </view>
          </view>        
        </view>
      </view>
      <view class="hollowTextRight">
        <view v-for="(item, index) in hollowsList2" :key="index">          
          <view class="TextRight">
            <view> {{ item.story }} </view>
          </view>         
        </view>
      </view>
    </view> -->
    <!-- 树洞消息 -->    
   <view>
      <view style="margin:0 7%;" v-for="(item, index) in hollowsList" :key="index">
        <view class="TextRight">
          <view> {{ item.story }} </view>
        </view>
      </view>
      <view style="height:100rpx"></view>
    </view>
  </view>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      // 左列
      // hollowsList1: [{ story: "story1" }, { story: "story2" }],
      // 右列
      // hollowsList2: [{ story: "story3" }, { story: "story4" }],
      
      hollowsList: [],// hollow数据列表
      hollowThePage:1,// 当前页      
      // hollowPage:1,// 页数
      // 节流阀
      isloading:false,
    };
  },
  computed:{
    ...mapState('m_page',['hollowPage']),
  },
  // 获取树洞
  async beforeCreate() {
    const { data: res } = await uni.$http.get("/hollow/pages");
    console.log("pages.res is :", res);
    // this.hollowPage=res.data.pages;
    this.changeHollowPage(res.data.pages);
    // 调用get函数
    this.getHollows();
  },
  methods: {
    ...mapMutations('m_page',['changeHollowPage']),
    // 触底上拉获取数据
    async scrolltolowerUpdateHollow(){
      console.log('// 触底上拉获取数据');
      if (this.isloading) return;
      this.isloading=true;
      // 页数超过了，不请求
      if (this.hollowThePage>=this.hollowPage){
        console.log('还能触发页数超了');
        return this.isloading=false;
      }
      await this.getHollows(++this.hollowThePage);
      // 解除节流
      setTimeout(()=>{        
        this.isloading=false;
      },100)
    },
    // 下拉刷新
    async myOnPullDownRefresh() {
      console.log("下拉刷新");    
      // 调用get函数
      this.hollowsList=[];
      this.hollowThePage=1;
      this.getHollows();
    },
    // 发请求获取hollows
    // async getHollows() {
    //   const { data: res } = await uni.$http.get("/hollow/hollows?page=1");
    //   // this.hollowsList=res.data;
    //   console.log("hollows", res.data);
    //   // 配置左列
    //   this.hollowsList1 = res.data.filter((element, index) => {
    //     return index % 2 == 0;
    //   });
    //   // 配置右列
    //   this.hollowsList2 = res.data.filter((element, index) => {
    //     return index % 2 == 1;
    //   });
    // },
    // 发请求获取hollows
    async getHollows(thePage=1) {
      const { data: res } = await uni.$http.get("/hollow/hollows",{page:thePage});
      this.hollowsList = [...this.hollowsList, ...res.data];
      console.log("hollows", this.hollowsList);
    },
    // 跳转到提交hollow页面
    gotoPutHollow() {
      console.log("gotoPutHollow");
      uni.navigateTo({ url: "/mycomponents/my-puthollow/my-puthollow" });
    },
  },
};
</script>

<style lang="scss" scoped>
.suspension {
  // 悬浮居中
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 10rpx;
}

// 以下样式暂时不适用
.hollowTextLeft {
  // float: left;
  width: 45%;
}
.hollowTextRight {
  // float: right;
  width: 45%;
}
.TextLeft {
  margin: 30rpx 0 10rpx;
  border-radius: 15rpx;
  padding: 25rpx 15rpx;
  background-color: rgb(242, 222, 215);
}
.TextRight {
  margin: 30rpx 0 10rpx;
  border-radius: 15rpx;
  padding: 25rpx 15rpx;
  background-color: rgb(250, 224, 211);
}
.light {
  background-color: aqua;
}
</style>
