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
				activities:[{
					title:"美白针",
					time:"20180505",
					location:"黄土村",
					imageUrl:"/images/activity1.jpg",
					id:"19"
				},{
					title:"美白针",
					time:"20180505",
					location:"黄土村",
					imageUrl:"/images/activity1.jpg",
					id:"11"
				}]
			}
		},
		created(){
			
		}
	}
</script>

<style >
	
</style>