<template>
	<div>
		<div>个人</div>
	 <button  open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
	 <button @click = "scanHandle">扫码</button>
	 <button @click = "userUrltest">userUrltest</button>

	</div>
</template>

<script >
	import {showSuccess} from "@/util.js";
	import qcloud from "wafer2-client-sdk";
	import config from "@/config";
	export default  {
		methods:{
			bindGetUserInfo(e){

				//npm demo code
				const session = qcloud.Session.get()

			    if (session) {
			        // 第二次登录
			        // 或者本地已经有登录态
			        // 可使用本函数更新登录态
			        qcloud.loginWithCode({
			            success: res => {
			                //this.setData({ userInfo: res, logged: true })
			                // util.showSuccess('登录成功')
			                console.log("用户信息：",res)
			            },
			            fail: err => {
			                console.error("错误：",err)
			                // util.showModel('登录错误', err.message)
			            }
			        })
			    } else {
		        // 首次登录
			        qcloud.login({
			            success: res => {
			                // this.setData({ userInfo: res, logged: true })
			                // util.showSuccess('登录成功')
			                console.log("用户信息：",res)
			            },
			            fail: err => {
			                console.error("错误：",err)
			                // util.showModel('登录错误', err.message)
			            }
			        })
			    }

			},
			scanHandle(){
				wx.scanCode({
				  success: (res) => {
				    console.log(res)
				  }
				})
			},
			userUrltest(){
				qcloud.request({
				    url: config.service.requestUrl,
				    success: function (response) {
				        console.log(response);
				    },
				    fail: function (err) {
				        console.log(err);
				    }
				});
			}
		},
		created(){

		  qcloud.setLoginUrl(config.service.loginUrl)
		}
		
	}
</script>

<style >
	
</style>