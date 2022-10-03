<template>
  <view>
    <u-cell-group>
	  <u-cell
        title="头像"
        isLink
        url="/pages/changePersonInformation/changeAvatarUrl"
      >
		<view slot="value">
			<u-avatar
            size="60"
            src="https://cdn.uviewui.com/uview/album/1.jpg"
            shape="circle"
          ></u-avatar>
		</view>
	  </u-cell>
      <u-cell
        title="昵称"
        isLink
        url="/pages/changePersonInformation/changeUserName"
      ></u-cell>      
      <u-cell
        title="性别"
        isLink
        url="/pages/changePersonInformation/changeGender"
      ></u-cell>      
    </u-cell-group>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
