<template>
	<view class="content">
		<view class="title">LPL2020年春季赛积分表</view>
		<view class="genaral-area">
			<view class="flex-box tc thead">
				<view class="item-2">排名</view>
				<view class="item-2">俱乐部</view>
				<view class="item-2">胜负</view>
				<view class="item-2">积分</view>
			</view>
			<view class="flex-box table tc" v-for="(item,index) in lists" :key="item.id">
				<view class="item-2">{{ item.id }}</view>
				<view class="item-2">{{ item.name }}</view>
				<view class="item-2">{{ item.shengfu }}</view>
				<view class="item-2">{{ item.jifen }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../store/request.js'
	export default {
		data() {
			return {
				lists:[]
			}
		},
		onLoad() {
			http.get('/rank').then(rs=>{
				console.log(rs)
				this.lists = rs.data
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	$color:#e0e0e0;
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #fbf9fe;
	}
	
	.flex-box {
		display: flex;
		flex-wrap: wrap;
	}
	
	
	.flex-box>.item-2 {
		flex: 0 0 25%;
	}
	
	.title{
		margin: 20upx 0;
		color: red;
	}
	
	//普通表格
	.genaral-area {
		.item-2 {
			font-size: 26upx;
			border: 1upx solid $color;
			border-width: 1upx 1upx 0 0;
			padding: 16upx 0;
			box-sizing: border-box;
			text-align: center;
	
			&:first-child {
				border-left-width: 1upx;
			}
	
			&:last-child {
				border-right-width: 1upx;
			}
		}
	
		.thead {
			.item-2 {
				font-weight: bold;
	
				box-sizing: border-box;
			}
		}
	
		.table {
			&:last-child {
				border-bottom: 1upx solid $color;
			}
	
			.item-2 {
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
			}
		}
	}
</style>
