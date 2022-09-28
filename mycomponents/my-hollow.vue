<template>
	<view>
		this is 树洞
        
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				
			};
		},
        async beforeCreate() {
            console.log('erroe')
            const {data:res} = await uni.$http.get('/hollow/pages')
            console.log('pages.res is :',res);
        }
	}
</script>

<style lang="scss">

</style>
