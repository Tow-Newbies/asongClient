import config from "./config.js";



export function request(url,method,data){
	console.log("request执行")
	return new Promise((resolve,reject)=>{
		wx.request({
			url:config.service.host + url,
			data,
			method,
			success:function(res){
				if(res.data){
					resolve(res.data)
				} else {
					reject(res.data)
				}
			},
			fail:function(res){
				console.log(res)
			}
		})
	})
}


export function showSuccess(text){
	wx.showToast({
	  title: text,
	  icon: 'success',
	  duration: 2000
	})
}

