<template>
	
	<div class="activity">
		<div class="titleCon">
			<image :src="imgUrl" mode="widthFix" class="titleImage"></image>
			<div class="title">标题{{title}}</div>
		</div>
		
		<div>
			<span class="iconfont icon-shizhongclock77"></span>
			<span class="time">活动时间: {{time}}</span>
		</div>
		<div>
			<span class="iconfont icon-dizhi"></span>
			<span class="loaction">活动地点: {{location}}</span>
		</div>
		
		<div class="detail"><a :href="detailUrl">&nbsp;&nbsp;&nbsp;查看详情</a></div>
		
	</div>
</template>

<script type="text/javascript">
import config from "../config.js"
	export default {
		props:['title','time','location','url','id','imageUrl'],
		data(){
			return　{
				
			}
		},
		computed:{
			detailUrl(){
				return "/pages/detail/main?id=" + this.id
			},

			imgUrl(){
				return config.service.host + this.imageUrl
			}
		},
		mounted(){
			// console.log("imageUrl:",this.imageUrl);
		}
	}
</script>

<style scoped lang = scss>

	$color:#f95e5e;
	.common{
		padding: 10rpx 0 10rpx 30rpx ;
		background-color: #fff;

	}
	.icon-shizhongclock77{
		color: $color;
	}
	.icon-dizhi{
		color: $color;

	}
	.activity{
		width: 80%;
		text-align: left;
		margin-left: auto;
		margin-right: auto;
		border-radius:12rpx;
		margin-bottom:50rpx;
		/*padding-left: 20rpx;*/
		/*background-color: #777474;*/
		border-radius:12rpx;
		overflow:hidden;

		.titleCon{
			position: relative;

			.titleImage{
				width: 100%;

			}

			.title{
				height: 100rpx;
				line-height: 100rpx;
				color:white;
				position: absolute;
				bottom:0;
				width:100%;
				text-align:center;


			}
		}
		
		
		.time{
			font-size: 30rpx;
			@extend .common;

		}
		.loaction{
			font-size: 30rpx;
			@extend .common;


		}
		.locateIcon{
			font-size: 30rpx;
			@extend .common;


		}
		.detail{
			font-size: 30rpx;
			color: #e5764e;
			@extend .common;
		

		}
		.book{
			font-size: 30rpx;
			@extend .common;


		}
	}
</style>