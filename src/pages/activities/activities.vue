<template>
	<div>
		<activity v-for="acvtivity in activities" :key="activities.id" v-bind="acvtivity"></activity>
	</div>
</template>

<script >
	import activity from "@/components/activity";
	export default {
		components:{
			activity
		},
		data:function(){
			return {
				userInfo:{},
				a:1,
				activities:[{
					title:"美白针",
					time:"20180505",
					location:"黄土村",
					id:"19"
				},{
					title:"美白针",
					time:"20180505",
					location:"黄土村",
					id:"11"
				}]
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