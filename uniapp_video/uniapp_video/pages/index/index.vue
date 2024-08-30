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
	</view>
</template>

<script>
	// import config from "../../common/config.js"
	const config = require("../../common/config.js")
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
			}
		}
	}
</script>

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
</style>