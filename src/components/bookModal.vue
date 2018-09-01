<template>
	<div class="modal">
			<div class="bookModal">
				<div class="modalHead">
					<div class="modalTitle">
						{{detail.title}}
					</div>
					<div class="modalPrice">
						￥{{detail.price}}
					</div>
					<div class="clear"></div>
				</div>
				<div class="hr"></div>
				<div class="modalNotice ">
					<div class="modalNotice_head">预约付费</div>
					<div class="modalNotice_content">为了合理安排师傅和顾客的时间，请在线预约          客户付费后直接到店体验服务！</div>
				</div>
				<div class="countContain">
					<div class="countContain-title">购买数量</div>
					<div class="countContain-count">
						<span class="iconfont icon-iconset0187" @click="minus"></span>
						<span> {{buyCount}} </span>
						<span class="iconfont icon-iconset0186" @click="add"></span>
					</div>
					<div class="clear"></div>
				</div>
				<div class="hr"></div>
				<div class="btnContain-con">
					<div class="btnContain">
						<button class="cancleBtn" @click="cancle">取消</button>
						<button @click = "bookHandler" class="payBtn">微信支付</button>
						<div class="clear"></div>
					</div>
				</div>
				
			</div>

		</div>
</template>
<script type="text/javascript">
	export default {
		props:["detail"],
		data(){
			return {
				buyCount:0
			}
		},
		mounted(){
			console.log(this.detail)
		},
		methods:{
			minus(){
				if(this.buyCount > 0){
					this.buyCount -= 1;
				}
				
			},
			add(){
				this.buyCount += 1;

			},
			cancle(){
				this.$root.isBookShow = false;
			},
			bookHandler(){
				
				this.$root.isBookShow = false;
			}
		}
	}
</script>
<style scope lang = scss>
	$color:#f95e5e;

	.clear{
		clear: both;
	}
	.modal{
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			background-color: rgba(3,3,3,0.7);
			/*opacity: 0.6;*/
			z-index: 900;
			/*border-style: solid dotted dashed double;*/
			.bookModal{
				/*opacity: 1 !important;*/
				color: white;
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 400px;
				/*z-index: 950;*/
				font-size: 33rpx;
				background-color: #fff;
				border: 1px solid $color;
				box-sizing: border-box;
				padding:30px 15px;
				border-radius:5px;
				color:$color;
				/*font-weight: 300;*/

				.modalHead{
					margin-bottom: 40px;

					.modalTitle{
						float: left;

					}
					.modalPrice{
						float: right;
						font-size: 30px;
						font-weight: 600;
						margin-top: -10px;
						color: red;
					}
					
				}
				.hr{
					border-bottom: 1px solid $color;
				}

				.modalNotice{
					text-align:center;
					margin-top:52rpx;
					width:85%;
					margin-left:auto;
					margin-right:auto;
					border-style:dashed;
					border-width: 2px;
					padding:11px;

					.modalNotice_content{
						font-size: 15px;
					}

				}
			}
			.countContain{
				margin: 20px 0;
				.countContain-title{
					float: left;
				}
				.countContain-count{
					float: right;
				}
			}
			.btnContain-con{
				width: 90%;
				margin:0 auto;
				margin-top: 50rpx;
				.btnContain{
					text-align: center;
					.cancleBtn{
						float: left;
						font-size: 15px;
						width: 30%;
						color: $color;
					}
					.payBtn{
						float: left;
						font-size: 15px;
						width: 70%;
						background-color: $color;
						color: white;
					}
				}
			}
			
		}
</style>