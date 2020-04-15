<template>
	<view class="content">
		<view class="title">LPL2020年春季赛积分表</view>
		<view>
			<view class="flex-box">
				<view class="item-2">排名</view>
				<view class="item-2">俱乐部</view>
				<view class="item-2">场次</view>
				<view class="item-2">胜场</view>
				<view class="item-2">负场</view>
				<view class="item-2">积分</view>
			</view>
			<view class="flex-box" v-for="item in lists" :key="item.id">
				<view class="item-2">{{ item.rank }}</view>
				<view class="item-2 logo">
					<image :src="item.src" class="imgSrc"></image>
					<text style="flex: 1;">{{ item.name }}</text>
				</view>
				<view class="item-2">{{ item.session }}</view>
				<view class="item-2">{{ item.victory }}</view>
				<view class="item-2">{{ item.loss }}</view>
				<view class="item-2">{{ item.scroe }}</view>
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
			http.get('/match').then(rs=>{
				this.lists = rs.data
			})
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 500);
		},
		methods: {

		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #fbf9fe;
	}
	
	.flex-box {
		display: flex;
	}
	
	
	.flex-box>.item-2 {
		flex: 0 0 16.5%;
	}
	
	.title{
		margin: 20rpx 0;
		color: red;
		text-align: center;
	}
	
	.item-2 {
		font-size: 26rpx;
		border: 1rpx solid #e0e0e0;
		border-width: 1rpx 1rpx 0 0;
		padding: 16rpx 0;
		text-align: center;
	}
	
	.imgSrc{
		width: 20rpx;
		height: 26rpx;
		flex: 1;
	}
	
	.logo{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
