<template>
  <div>
    <div>welcome</div>
<!--     <button  open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button> -->
  </div>
</template>
<script >
	import qcloud from "wafer2-client-sdk";
	import {showSuccess} from "../../util.js";
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			// bindGetUserInfo(e){
			// 	let user = wx.getStorageSync("userInfo");
			// 	if(user){
			// 		console.log("已有用户信息");
			// 	}else{
			// 		wx.setStorageSync("userInfo",e.mp.detail.rawData);
			// 		showSuccess("获取用户信息成功");
			// 	}

			// },
			// getUser(){
			// 	qcloud
			// }
		}
	}
</script>

<style >
	
</style>