<template>
	<div>
		<div>活动</div>
		<div>
			<open-data type="userNickName"></open-data>
			<open-data type="userAvatarUrl"></open-data>
			<open-data type="userGender" lang="zh_CN"></open-data>
			<P>{{a}}</P>
		</div>
	</div>
</template>

<script >
	module.exports = {
		data:function(){
			return {
				userInfo:{},
				a:1
			}
		},
		created(){
			console.log("user:",wx.getStorageSync("userInfo"))
			//this.userInfo = wx.getStorageSync("userInfo");
			this.a = 20;
			// 
		}
	}
</script>

<style >
	
</style>