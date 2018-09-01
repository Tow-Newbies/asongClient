<template>		
	<div class="mainContain">
		<div>
			<div>
				<image :src='imgUrl' mode='widthFix'></image>
			</div>
			<div>
				{{detail.title}}
			</div>
			<div>
				￥{{detail.price}}
			</div>
			<ul>
				<li v-for="(item,index) in detail.enjoyList" :key='index'>
					{{index+1}} : {{item}}
				</li>
			</ul>
		</div>
		<bookModal v-if="isBookShow" v-bind:detail="detail"></bookModal>

		<button @click = "book">预约</button>
	</div>
</template>

<script type="text/javascript">
import {request} from "../../util.js";
import config from "../../config.js";
import bookModal from "../../components/bookModal.vue";
	export default {
		data(){
			return {
				id:'',
				detail:{},
				isBookShow:false
			}
		},
		components:{
			bookModal
		},
		mounted(){
			this.id = this.$root.$mp.query.id;
			this.getDetail();

		},
		methods:{
			async getDetail(){
				console.log("getDetail执行了")
				const detail = await request("/weapp/detail","get",{id:this.id});
				this.detail = detail;
				console.log(detail)
			},
			book(){
				this.isBookShow = true;
			},
			bookHandler(){
				this.isBookShow = false;
			}
		},
		computed:{
			imgUrl(){
				return config.service.host + this.detail.imageUrl
			}
		}
	}
</script>

<style scoped lang = scss>
	
	.clear{
		clear: both;
	}

	.mainContain{
		position: relative;
		z-index: 100;
		
	}
	
</style>