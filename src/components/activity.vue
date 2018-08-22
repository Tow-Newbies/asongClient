<template>
	<div>
		<div>标题{{title}}</div>
		<div>
			<p>活动时间{{time}}</p>
			<p>活动地点{{location}}</p>
			<p>地图图标</p>
			<p><a :href="detailUrl">查看详情</a></p>
			<p><a :href="detailUrl">预约</a></p>
			<p>{{id}}</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props:['title','time','location','url','id'],
		computed:{
			detailUrl(){
				return "/pages/detail/main?id=" + this.id
			}
		}
	}
</script>

<style type="text/css">
	
</style>