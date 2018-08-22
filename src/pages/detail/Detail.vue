<template>		
	<div>
		活动详情页{{detail}}
		<button @click = "getDetail">点击</button>
	</div>
</template>

<script type="text/javascript">
import {request} from "../../util.js";
	export default {
		data(){
			return {
				id:'',
				detail:{}
			}
		},
		mounted(){
			this.id = this.$root.$mp.query.id
		},
		methods:{
			async getDetail(){
				console.log("getDetail执行了")
				const detail = await request("/weapp/detail","get",{id:this.id});
				this.detail = detail;
				console.log(detail)
			}
		}
	}
</script>

<style type="text/css">
	
</style>