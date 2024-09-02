<style lang="scss">
	.nav {
		white-space: nowrap;
		padding: 5rpx 0;

		.nav_item {
			padding: 20rpx 45rpx;
			font-size: 30rpx;
			display: inline-block;
		}

		.active {
			border-bottom: 5rpx solid #87ceeb;
		}
	}

	.slides {
		margin: 10rpx 0;

		swiper {
			height: 220rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.video-wrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 5rpx;
	}

	.video-item {
		width: 48%;
		margin-bottom: 20rpx;
	}

	.video-img {
		position: relative;

		image {
			width: 100%;
			border-radius: 15rpx;
		}

		.video-info {
			position: absolute;
			left: 0;
			bottom: 8rpx;
			width: 100%;
			display: flex;
			justify-content: space-around;
			background-color: rgba(0, 0, 0, 0.4);

			text {
				margin-right: 5rpx;
				font-size: 24rpx;
				color: #efefef;
			}
		}
	}

	.video-title {
		font-size: 28rpx;
		/* 将对象作为弹性伸缩盒子模型显示 */
		display: -webkit-box;
		/* 超出部分隐藏 */
		overflow: hidden;
		/* 显示的行数 */
		-webkit-line-clamp: 2;
		/* 从上到下垂直排列子元素 */
		-webkit-box-orient: vertical;
	}
</style>

<template>
	<view>
		<MyTitle></MyTitle>
		<!-- 导航栏 -->
		<view class="nav_wrap">
			<scroll-view class="nav" scroll-x>
				<view @click="activeNav($event,index)" :class="['nav_item',index===currentIndexNav?'active':'']"
					:data-index="index" v-for="(item,index) in navList" :key="item.id">
					{{item.text}}
				</view>
			</scroll-view>
		</view>
		<!-- 轮播图 -->
		<view class="slides">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.imgSrc" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 视频列表 -->
		<view class="video-wrap">
			<view class="video-item" @click="toVideoDetail(item.id)" v-for="(item,index) in videoList" :key="item.id">
				<view class="video-img">
					<image :src="item.imgSrc" mode="widthFix"></image>
					<view class="video-info">
						<!-- 播放量 -->
						<view class="play-count-wrap">
							<text class="fa fa-play-circle-o"></text>
							<text class="play-count">{{item.playCount}}</text>
						</view>
						<!-- 评论量 -->
						<view class="comment-count-row">
							<text class="fa fa-commenting-o"></text>
							<text class="comment-count">{{item.commentCount}}</text>
						</view>
					</view>
				</view>
				<view class="video-title">
					{{item.desc}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import config from "../../common/config.js"
	// const config = require("../../common/config.js")

	export default {
		data() {
			return {
				navList: [],
				currentIndexNav: 0,
				swiperList: [],
				videoList: []
			}
		},
		onLoad() {
			this.getNavList()
			this.getSwiperList()
			this.getVideoList()
		},
		methods: {
			getNavList: function() {
				uni.request({
					url: config.url + "/navList",
					success: res => {
						this.navList = res.data.data.navList
					}
				})
			},
			activeNav: function(e, index) {
				// this.currentIndexNav = e.target.dataset.index
				this.currentIndexNav = index
			},
			getSwiperList: function() {
				uni.request({
					url: config.url + "/swiperList",
					success: res => {
						this.swiperList = res.data.data.swiperList
					}
				})
			},
			getVideoList: function() {
				uni.request({
					url: config.url + "/videosList",
					success: res => {
						const result = res.data
						this.videoList = result.data.videosList
					}
				})
			},
			toVideoDetail: function(id) {
				uni.navigateTo({
					url: "/pages/detail/detail?id=" + id
				})
			}
		}
	}
</script>