<template>
  <view>
    <u-list @scrolltolower="scrolltolower">
      <u-list-item v-for="(item, index) in chatlist" :key="index">
        <u-cell :title="item.name" @click="gotoChat(item)">
          <u-avatar
            slot="icon"
            shape="square"
            size="35"
            :src="item.avatarUrl"
            customStyle="margin: -3px 5px -3px 0"
          ></u-avatar>
        </u-cell>
      </u-list-item>
    </u-list>
  </view>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      chatlist: [],
    };
  },
  async created() {
    console.log("created in chatList.vue");
    const { data: res } = await uni.$http.get("/advisory/reserve");
    console.log('chatlist is',res);
    this.chatlist=res.data;
  },
  methods: {
    ...mapMutations("m_dchat", ["setAdvisoryId", "setDocAvatarUrl"]),
    scrolltolower() {
      console.log("scrolltolower");
    },
    gotoChat(item) {
      console.log("go in chatList.vue");
      // 更新会话对象
      this.setAdvisoryId(item.id);
      this.setDocAvatarUrl(item.avatarUrl);
      uni.navigateTo({ url: "/pages/order/docotorChat" });      
    },
  },
};
</script>

<style lang="scss" scoped></style>
