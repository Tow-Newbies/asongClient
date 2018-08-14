import config from "./config.js";

export function get(url){
	return new Promise((resolve,reject) => {
		wx.request({
			url:config.host + url,
			success:function(res){
				if(res.data){
					resolve(res.data)
				} else {
					reject(res.data)
				}
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