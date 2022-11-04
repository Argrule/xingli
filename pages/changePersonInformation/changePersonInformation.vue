<template>
  <view>
    <u-cell-group>
      <u-cell
        title="头像"
        isLink
        url="/pages/changePersonInformation/changeAvatarUrl"
      >
        <view slot="value">
          <u-avatar size="60" :src="avatarUrl" shape="circle"></u-avatar>
        </view>
      </u-cell>
      <u-cell title="昵称" isLink @click="inputDialogToggle">
        <view slot="value">
          {{ userName }}
        </view>
      </u-cell>
      <u-cell title="性别" isLink @click="showSexSelect = true">
        <view slot="value">
          {{ gender == 1 ? "男" : "女" }}
        </view>
      </u-cell>
      <u-cell title="邮箱" isLink @click="emailDialogToggle">
        <view slot="value">
          {{ email }}
        </view>
      </u-cell>
    </u-cell-group>
    <!-- 选择性别弹窗 -->
    <u-action-sheet
      :actions="[
        {
          name: '男',
        },
        {
          name: '女',
        },
      ]"
      @select="selectClick"
      :closeOnClickOverlay="true"
      @close="showSexSelect = false"
      :show="showSexSelect"
    ></u-action-sheet>
    <!-- 填写昵称 -->
    <uni-popup ref="inputNickName" type="dialog">
      <uni-popup-dialog
        ref="inputClose"
        mode="input"
        title="填写昵称"
        :value="nickName"
        @close="dialogClose"
        @confirm="dialogInputConfirm"
      ></uni-popup-dialog>
    </uni-popup>
    <!-- 填写邮箱 -->
    <uni-popup ref="inputEmailName" type="dialog">
      <uni-popup-dialog
        ref="inputClose"
        mode="input"
        title="填写邮箱"
        :value="theEmail"
        @close="dialogClose"
        @confirm="emailInputConfirm"
      ></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // 选择性别弹窗
      showSexSelect: false,
      theGender: 1,
      nickName: "",
      theEmail: "",
    };
  },
  computed: {
    ...mapState("m_personal", [
      "avatarUrl",
      "userId",
      "userName",
      "gender",
      "email",
    ]),
  },
  methods: {
    ...mapMutations("m_personal", [
      "changeGender",
      "changeUserName",
      "changeEmail",
    ]),
    // 选择性别后触发
    selectClick({ name }) {
      this.theGender = name == "男" ? 1 : 0;
      console.log("你选择的性别为", this.gender);
      // console.log('index is:',name);
      this.showSexSelect = false;
      // 修改性别
      this.putPersonInfo(this.theGender, 1);
    },
    // 取消
    dialogClose() {
      console.log("dialogClose,取消就不发请求");
    },
    // 提交nickName
    dialogInputConfirm(str_value) {
      console.log("dialogInputConfirm");
      // 修改昵称
      this.putPersonInfo(str_value);
    },
    // 提交email
    emailInputConfirm(str_value) {
      console.log("emailInputConfirm");
      // 修改email
      this.putPersonInfo(str_value, 2);
    },
    // 打开input nickName
    inputDialogToggle() {
      this.$refs.inputNickName.open();
    },
    // 打开input email弹窗
    emailDialogToggle() {
      this.$refs.inputEmailName.open();
    },
    // 各种修改信息put
    async putPersonInfo(str_value, key = 0) {
      let putInfo = {
        userId: this.userId,
      };
      switch (key) {
        case 0:
          if (str_value == "") {
            return uni.$showMsg("名字不能为空");
          }
          putInfo.userName = str_value;
          break;
        case 1:
          putInfo.gender = str_value;
          break;
        case 2:
          if (!/[\w\W]+@[\w\W]+/.test(str_value)) {
            return uni.$showMsg("邮箱格式错误");
          }
          putInfo.email = str_value;
          break;
      }
      const { data: res } = await uni.$http.post("/user/info", putInfo);
      console.log("put info", res);
      if (res.code == "00000") {
        switch (key) {
          case 0:
            this.changeUserName(str_value);
            break;
          case 1:
            this.changeGender(str_value);
            break;
          case 2:
            this.changeEmail(str_value);
            break;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
