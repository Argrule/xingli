<template>
  <view>
    <!-- 选择心情弹窗 -->
    <u-action-sheet
      :actions="[
        {
          name: '开心',
        },
        {
          name: '一般',
        },
        {
          name: '难过',
        },
      ]"
      @select="selectClick"
      :show="showMoodSelect"
    ></u-action-sheet>
    <!-- 右弹窗 -->
    <menuBoard ref="menuBoard"></menuBoard>
    <!-- 头像部分 -->
    <view class="content">
      <view class="person">
        <view class="avatar">
          <u-avatar size="60" :src="avatarUrl" shape="circle"></u-avatar>
        </view>
        <view class="nickName">
          <view style="display: flex">
            <view>{{ userName }}</view>
            <view v-if="gender"
              ><u-icon name="man" color="#2979ff" size="28"></u-icon
            ></view>
            <view v-else
              ><u-icon name="woman" color="rgb(231, 94, 155)" size="28"></u-icon
            ></view>
          </view>
          <view> ID: {{ userId }} </view>
        </view>
        <view class="list-icon">
          <!-- 打开右弹窗 -->
          <u-icon
            @click="rightDialogList"
            name="list-dot"
            color="#DC8C6B"
            size="20"
          ></u-icon>
          <view style="position: relative; bottom: 11%">
            <u-icon
              @click="changePersonal"
              name="arrow-right"
              color="#DC8C6B"
              size="20"
            ></u-icon>
          </view>
        </view>
      </view>
      <!-- 防塌陷 -->
      <view class="empty"></view>
    </view>
    <!-- mood-dairy部分 -->
    <view class="mood-dairy">
      <!-- dairy头部 -->
      <view class="flexMood">
        <!-- 左侧框 -->
        <view class="mood-font">
          <u-icon name="edit-pen" color="#DC8C6B" size="25"></u-icon>
          <view class="mood-word"> MOOD DAIRY </view>
        </view>
        <!-- 右侧日期 -->
        <view class="dateTime">{{ todaydateTime }}</view>
      </view>
      <!-- dairy内容 -->
      <view class="dairyDetail" v-if="isDairyDetailEdit">
        <!-- 编辑图标 -->
        <view class="dairyDetailEdit">
          <u-icon
            @click="changeIsDairyDetailEdit"
            name="edit-pen-fill"
            color="#DC8C6B"
            size="28"
          ></u-icon>
        </view>
        <!-- 列表 -->
        <scroll-view
          scroll-y="true"
          style="height: calc(28vh)"
          scroll-top="0"
          @scrolltolower="scrolltolowerUpdateDiary"
        >
          <view v-for="(item, i) in moodList" :key="i">
            <view class="mood-list">
              <view class="mood-word">{{ item.date }}</view>
              <view v-if="item.mood == 0">
                <uni-icons
                  custom-prefix="iconfont"
                  type="icon-mood"
                  size="20"
                ></uni-icons>
              </view>
              <view v-else-if="item.mood == 1">
                <uni-icons
                  custom-prefix="iconfont"
                  type="icon-xinqingyiban-yuan"
                  size="18"
                ></uni-icons>
              </view>
              <view v-else-if="item.mood == 2">
                <uni-icons
                  custom-prefix="iconfont"
                  type="icon-mood-bad"
                  size="20"
                ></uni-icons>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
      <view v-else>
        <!-- 返回按钮 -->
        <view class="dairyDetailEditReturn">
          <!-- 返回 -->
          <uni-icons
            type="undo"
            @click="changeIsDairyDetailEdit"
            color="#DC8C6B"
            size="20"
          ></uni-icons>
          <!-- 提交mood -->
          <view style="margin-left: 50rpx" @click="putMoodToday"
            ><u-icon name="checkbox-mark" color="#DC8C6B" size="20"></u-icon
          ></view>
          <view style="margin-left: 350rpx" @click="selectMood">
            <view v-if="todayMood == 0">
              <uni-icons
                custom-prefix="iconfont"
                color="#DC8C6B"
                type="icon-mood"
                size="20"
              ></uni-icons>
            </view>
            <view v-else-if="todayMood == 1">
              <uni-icons
                custom-prefix="iconfont"
                color="#DC8C6B"
                type="icon-xinqingyiban-yuan"
                size="18"
              ></uni-icons>
            </view>
            <view v-else-if="todayMood == 2">
              <uni-icons
                custom-prefix="iconfont"
                color="#DC8C6B"
                type="icon-mood-bad"
                size="20"
              ></uni-icons>
            </view>
          </view>
        </view>
        <view class="">
          <u--textarea
            v-model="todayMessage"
            placeholder="记录此刻心情......"
            border="none"
          ></u--textarea>
        </view>
      </view>
    </view>
    <!-- to-do-list部分 -->
    <view class="to-do-list">
      <!-- to-do-list头部 -->
      <view class="toDoListHead">
        <!-- 左侧框 -->
        <view class="mood-font">
          <u-icon name="calendar" color="#DC8C6B" size="25"></u-icon>
          <view class="mood-word"> TO-DO-LIST </view>
        </view>
      </view>
      <view class="dairyDetail">
        <!-- 列表 -->
        <scroll-view
          scroll-y="true"
          style="height: calc(28vh)"
          scroll-top="0"
          @scrolltolower="scrolltolowerUpdateTodoList"
        >
          <view v-for="(item, i) in toDoList" :key="i">
            <view class="todo-list">
              <view v-if="item.finish == 0">
                <uni-icons
                  type="circle"
                  @click="changeFinish(item)"
                  color="#DC8C6B"
                  size="20"
                ></uni-icons>
              </view>
              <view v-else>
                <uni-icons
                  type="checkbox-filled"
                  @click="changeFinish(item)"
                  color="#DC8C6B"
                  size="20"
                ></uni-icons>
              </view>
              <view
                :class="[item.finish == 0 ? 'mood-word' : 'mood-word-finish']"
                >{{ item.todo }}</view
              >
            </view>
          </view>
        </scroll-view>
        <view class="dairyDetailEdit"
          ><u-icon
            name="plus-circle"
            color="#DC8C6B"
            size="28"
            @click="inputDialogToggle"
          ></u-icon>
          <!-- 填写今日todolist的弹窗 -->
          <uni-popup ref="inputDialog" type="dialog">
            <uni-popup-dialog
              ref="inputClose"
              mode="input"
              title="填写今日to-do-list"
              :value="todayTodo"
              @close="dialogClose"
              placeholder="写下你的待办吧"
              @confirm="dialogInputConfirm"
            ></uni-popup-dialog>
          </uni-popup>
        </view>
      </view>
    </view>
    <!-- 占位，防塌陷 -->
    <view class="empty"></view>
  </view>
</template>

<script>
import menuBoard from "../menu/menu.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // 节流阀
      isloading: false,
      diaryThePage: 1, //当前页
      // toDoThePage:1,//当前页
      // 导航切换
      isDairyDetailEdit: true,
      showMoodSelect: false,

      // 今日是否提交过Mood
      is_putMood: false,
      // 提交Mood的内容
      todayMood: 0,
      todayMessage: "",
      todaydateTime: "2022/9/22 Sunday",
      todayId: 0,
      // 列表
      moodList: [
        // {
        //   id: 1,
        //   mood: 2,
        //   date: "2022/09/28 test",
        // },
        // {
        //   id: 2,
        //   mood: 1,
        //   date: "2022/09/29 test",
        // },
        // {
        //   id: 2,
        //   mood: 0,
        //   date: "2022/09/30 test",
        // },
      ],
      toDoList: [
        // {
        //   id: 1,
        //   finish: 0,
        //   todo: "测试",
        // },
        // {
        //   id: 2,
        //   finish: 1,
        //   todo: "还是测试",
        // },
        // {
        //   id: 2,
        //   finish: 0,
        //   todo: "还是测测测测试",
        // },
      ],
      // 添加的今日todoList
      todayTodo: "",
    };
  },
  computed: {
    ...mapState("m_personal", ["userId", "userName", "gender", "avatarUrl"]),
    ...mapState("m_page", ["diaryPage", "todoPage"]),
  },
  components: {
    menuBoard,
  },
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
  },
  created() {
    this.getMoodListPage();
    this.getMoodListDetail();
    this.getTodoList();
    // this.todaydateTime=;
    {
      let thetime = new Date();
      let y = thetime.getFullYear().toString();
      // padStart格式两位补0
      let mt = (thetime.getMonth() + 1).toString().padStart(2, "0");
      let day = thetime.getDate().toString().padStart(2, "0");
      let week = thetime.getDay().toString();
      switch (week) {
        case "1":
          week = "Mon";
          break;
        case "2":
          week = "Tue";
          break;
        case "3":
          week = "Wed";
          break;
        case "4":
          week = "Thr";
          break;
        case "5":
          week = "Fri";
          break;
        case "6":
          week = "Sat";
          break;
        default:
          week = "Sun";
          break;
      }
      this.todaydateTime = y + "/" + mt + "/" + day + " " + week;
    };
  },
  methods: {
    ...mapMutations("m_page", ["changeDiaryPage", "changeTodoPage"]),
    // 打开input todo
    inputDialogToggle() {
      this.$refs.inputDialog.open();
    },
    // 取消input todo
    dialogClose() {
      console.log("点击关闭");
    },
    // 提交Input todo
    async dialogInputConfirm(input_val) {
      uni.showLoading({
        title: "填写成功",
      });
      // console.log(this.todayTodo);//this.todayTodo无效
      const { data: res } = await uni.$http.put("/tdmd/todo", {
        todo: input_val,
      });
      console.log("todoToday", res);
      // 重新获取todoList列表
      // console.log('// 重新获取todoList列表');
      this.getTodoList();
      // 关加载动画
      setTimeout(() => {
        uni.hideLoading();
        // console.log(val);
        this.todayTodo = input_val;
        // 关闭窗口后，恢复默认内容
        this.$refs.inputDialog.close();
      }, 1000);
    },

    // 获取diary页数
    async getMoodListPage() {
      const { data: pageResult } = await uni.$http.get("/tdmd/moodPages");
      // console.log("pageResult", pageResult);
      this.changeDiaryPage(pageResult.data.pages);
    },
    // 获取diary list第一页
    async getMoodListDetail(thePage = 1) {
      const { data: moodListResult } = await uni.$http.get("/tdmd/moods", {
        page: thePage,
      });
      // console.log("pageResult", moodListResult);
      this.moodList = [...this.moodList, ...moodListResult.data];
      console.log("moodlist", this.moodList);
    },
    // 获取todo list
    async getTodoList() {
      const { data: res } = await uni.$http.get("/tdmd/todo");
      console.log("hh", res.data);
      this.toDoList = res.data;
    },

    // 触底请求第二页diary
    async scrolltolowerUpdateDiary() {
      if (this.isloading) return;
      this.isloading = true;
      // 请求下一页
      await this.getInsertDiary();
      // 解除节流
      setTimeout(() => {
        this.isloading = false;
      }, 100);
    },
    // todolist不做分页，后续可能会改进
    scrolltolowerUpdateTodoList() {
      console.log("pulldown todolist");
    },
    getInsertDiary() {
      console.log("scrolltolowerUpdateDiary");
      console.log(this.diaryPage);
      // 页数超过了，不请求
      if (this.diaryThePage >= this.diaryPage) return;
      this.getMoodListDetail(++this.diaryThePage);
      console.log(this.diaryPage);
    },
    // getInsertTodo(){
    //   console.log('getInsertTodo');
    //   console.log(this.diaryPage);
    //   // 页数超过了，不请求
    //   if (this.diaryThePage>=this.diaryPage) return;
    //   this.getMoodListDetail(++this.diaryThePage);
    //   console.log(this.diaryPage);
    // },
    // 触底请求第二页todoList
    // async scrolltolowerUpdateTodoList(){
    //   if (this.isloading) return;
    //   this.isloading=true;
    //   // 请求下一页
    //   await this.getInsertTodo();
    //   // 解除节流
    //   setTimeout(()=>{
    //     this.isloading=false;
    //   },3000)
    // },
    // 选择表情
    selectMood() {
      console.log("// 选择表情");
      this.showMoodSelect = true;
    },
    selectClick({ name }) {
      this.todayMood = name == "开心" ? 0 : name == "一般" ? 1 : 2;
      console.log("你选择的心情为", this.todayMood);
      // console.log('index is:',name);
      this.showMoodSelect = false;
    },
    // 导航切换
    changeIsDairyDetailEdit() {
      this.isDairyDetailEdit = !this.isDairyDetailEdit;
    },
    // 修改个人信息页面
    changePersonal() {
      console.log("changePersonal");
      uni.navigateTo({
        url: "/pages/changePersonInformation/changePersonInformation",
      });
    },
    // 打开右弹窗菜单
    rightDialogList() {
      console.log("rightDialogList");
      this.$refs.menuBoard.menuShow = true;
    },
    // 修改to-do-list完成状态
    changeFinish(item) {
      console.log("item", item);
      // 只是视觉上改，需要发请求改
      item.finish = item.finish == 0 ? 1 : 0;
    },
    // 判断是否是今天第一次发put请求
    isPutMoodBefore() {
      // 依赖bug运行，后续一定要完善
      let thetime = new Date();
      console.log("the time is :", thetime);
      let y = thetime.getFullYear().toString();
      // padStart格式两位补0
      let mt = (thetime.getMonth() + 1).toString().padStart(2, "0");
      let day = thetime.getDate().toString().padStart(2, "0");
      let week = thetime.getDay().toString();
      switch (week) {
        case "1":
          week = "Mon";
          break;
        case "2":
          week = "Tue";
          break;
        case "3":
          week = "Wed";
          break;
        case "4":
          week = "Thr";
          break;
        case "5":
          week = "Fri";
          break;
        case "6":
          week = "Sat";
          break;
        default:
          week = "Sun";
          break;
      }
      let formDateTime = y + "/" + mt + "/" + day + " " + week;
      console.log("formDateTime", formDateTime);
      console.log(formDateTime == this.moodList[0].date);
      this.todayId = this.moodList[0].id;
      console.log("today id", this.todayId);
      // 返回值
      return formDateTime == this.moodList[0].date;
    },
    // put今日mood
    async putMoodToday() {
      console.log("putMoodToday");
      if (this.todayMessage == "") {
        return uni.$showMsg("请填写今日心情");
      }
      // 调用判断函数，接收返回值
      this.is_putMood = this.isPutMoodBefore();
      console.log("is_putMood", this.is_putMood);

      if (this.is_putMood) {
        // 非第一次，只能修改
        const { data: res } = await uni.$http.post("/tdmd/mood", {
          id: this.todayId,
          message: this.todayMessage,
          mood: this.todayMood,
        });
        console.log("mood", res);
        // 重新获取
        this.moodList = [];
        this.getMoodListDetail();
        // 完成后返回
        this.changeIsDairyDetailEdit();
      } else {
        // 第一次，put
        const { data: res } = await uni.$http.put("/tdmd/mood", {
          message: this.todayMessage,
          mood: this.todayMood,
        });
        console.log("mood", res);
        // 重新获取
        this.moodList = [];
        this.getMoodListDetail();
        // 改状态
        this.is_putMood = true;
        // 完成后返回
        this.changeIsDairyDetailEdit();
      }
    },
  },
};
</script>

<style lang="less" scoped>
page {
  background: #f8f8f8;
  letter-spacing: 1px;
}
.content {
  background-color: #f6b4a6;
}
.avatar {
  margin: 80rpx 60rpx 30rpx 90rpx;
  // position: relative;
  // left: 10%;
}
.empty {
  margin: 10rpx;
  height: 10rpx;
}
.nickName {
  margin-top: 60rpx;
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
  color: rgba(32, 41, 41, 0.76);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.list-icon {
  position: relative;
  left: 30%;
  // margin-top: 60rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
// mood列表
.mood-list {
  display: flex;
  justify-content: space-between;
  border-radius: 10rpx;
  width: 90%;
  margin: 20rpx 20rpx;
  padding: 8rpx 12rpx;
  background-color: #f8e8e1;
}
// todo列表
.todo-list {
  display: flex;
  justify-content: stretch;
  // align-items: center;
  border-radius: 10rpx;
  width: 90%;
  margin: 20rpx 20rpx;
  padding: 8rpx 12rpx;
  background-color: #f8e8e1;
}
.person {
  display: flex;
}
.mood-dairy {
  // 子绝父相
  position: relative;
  height: calc(35vh);
  background: #fff;
  margin: 50rpx 40rpx;
  padding: 15rpx;
  border-radius: 25rpx;
  box-shadow: // 2px 0px 8px rgb(109, 109, 109),  /*右边阴影*/
    0px 2px 8px rgb(109, 109, 109); /*下边阴影*/
}
.flexMood {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.toDoListHead {
  display: flex;
  justify-content: start;
  // 对齐
  margin-left: 20rpx;
}
.mood-font {
  display: flex;
  border-radius: 10rpx;
  width: 300rpx;
  background-color: rgb(240, 240, 240);
}
.mood-word {
  color: #dc8c6b;
  font-size: 35rpx;
  font-weight: 300;
}
// 中划线效果
.mood-word-finish {
  color: #dc8c6b;
  font-size: 35rpx;
  font-weight: 300;
  text-decoration: line-through;
}
.dateTime {
  color: #dc8c6b;
  font-size: 30rpx;
  font-weight: 300;
  // position: absolute;
  // right: 6%;
  // top: 20rpx;
}
.dairyDetail {
  margin: 5rpx 0;
  font-size: 30rpx;
}
.dairyDetailEdit {
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 1;
}
.dairyDetailEditReturn {
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 5%;
}
.to-do-list {
  // 子绝父相
  position: relative;
  font-size: 30rpx;
  height: calc(35vh);
  background: #fff;
  margin: 50rpx 40rpx;
  padding: 15rpx;
  border-radius: 25rpx;
  box-shadow: 0px 2px 8px rgb(109, 109, 109);
}
</style>
