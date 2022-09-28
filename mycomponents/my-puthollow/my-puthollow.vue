<template>
	<view>
		<view class="suspension">
		<uni-icons type="paperplane-filled" color="#FBC2A6" size="40"></uni-icons>
        <!-- <u-icon name="" @click="putHollow"  size="40"></u-icon> -->
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			async putHollow(){
                const {data:res} = await uni.$http.put('/hollow/hollow');
            }
		}
	}
</script>

<style lang="scss">

</style>
