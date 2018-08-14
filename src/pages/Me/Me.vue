<template>
	<div>
		<div>个人</div>
	 <button  open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
	</div>
</template>

<script >
	import {showSuccess} from "@/util.js";
	export default  {
		methods:{
			bindGetUserInfo(e){
				let user = wx.getStorageSync("userInfo");
				if(user){
					console.log("已有用户信息");
				}else{
					console.log(e);
					// wx.setStorageSync("userInfo",e.mp.detail.rawData);
					// showSuccess("获取用户信息成功");
				}

			}
		}
		// created(){
		// 	 wx.getSetting({
		//       success: function(res){
		//         if (res.authSetting['scope.userInfo']) {
		//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称
		//           wx.getUserInfo({
		//             success: function(res) {
		//               console.log("res.userInfo:",res.userInfo)
		//             }
		//           })
		//         }
		//       }
		//     })
		// }
		
	}
</script>

<style >
	
</style>