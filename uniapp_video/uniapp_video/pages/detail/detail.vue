  <style lang="scss">
  	.video-info {
  		margin-top: 10rpx;

  		.video {
  			width: 100%;
  		}

  		.video-title {
  			display: flex;
  			justify-content: space-between;
  			font-size: 35rpx;
  		}

  		.video-detail {
  			margin-top: 5rpx;
  			font-size: 28rpx;

  			text {
  				margin-left: 15rpx;
  			}

  			.author {
  				color: #000;
  			}
  		}
  	}

  	.other-list {
  		margin-top: 10rpx;

  		.item-other {
  			display: flex;
  			justify-content: space-between;
  			margin-bottom: 20rpx;

  			.other-img-wrap {
  				width: 30%;
  				display: flex;
  				justify-content: center;
  				align-items: center;

  				image {
  					width: 90%;
  					border-radius: 15rpx[];
  				}
  			}

  			.other-info {
  				width: 60%;
  				display: flex;
  				flex-direction: column;
  				justify-content: space-around;

  				.other-title {
  					font-size: 30rpx;
  					color: #e06f93;
  				}

  				.other-detail {
  					font-size: 26rpx;
  					color: #666;
  				}
  			}
  		}
  	}

  	.comment-wrap {
  		margin-top: 10rpx;

  		.comment-title {
  			padding: 10rpx;
  			font-size: 28rpx;
  		}

  		.comment-list {
  			.comment-item {
  				margin-bottom: 10rpx;
  				padding: 10rpx;
  				display: flex;
  				justify-content: space-between;
  				border-bottom: 1px solid #666;
  			}

  			.comment-user {
  				flex: 1;
  				display: flex;
  				justify-content: center;
  				align-items: center;

  				.comment-user-image {
  					width: 60%;
  					border-radius: 50%;
  				}
  			}

  			.comment-info {
  				flex: 5;
  				display: flex;
  				flex-direction: column;
  				justify-content: space-around;

  				.comment-detail {
  					display: flex;
  					justify-content: space-between;

  					.author {
  						font-size: 28rpx;
  						color: #000
  					}

  					.date {
  						color: #666;
  						font-size: 24rpx;
  					}
  				}

  				.comment-content {
  					font-size: 28rpx;
  					color: #000;
  				}
  			}
  		}
  	}
  </style>

  <template>
  	<view>
  		<MyTitle></MyTitle>
  		<!-- 视频详情 -->
  		<view class="video-info" v-if="videoInfo">
  			<video :src="videoInfo.videoSrc" controls class="video"></video>
  			<view class="video-title">
  				<text>{{videoInfo.videoTitle}}</text>
  				<text class="fa fa-angle-down"></text>
  			</view>
  			<view class="video-detail">
  				<text class="author">{{videoInfo.author}}</text>
  				<text class="play-count">{{videoInfo.playCount}}</text>
  				<text class="comment-count">{{videoInfo.commentCount}}弹幕</text>
  				<text class="date">时间：{{videoInfo.date}}</text>
  			</view>
  		</view>
  		<!-- 推荐视频 -->
  		<view class="other-list">
  			<view class="item-other" v-for="item in otherList" :key="item.id">
  				<view class="other-img-wrap">
  					<image :src="item.imgSrc" mode="widthFix"></image>
  				</view>
  				<view class="other-info">
  					<view class="other-title">{{item.title}}</view>
  					<view class="other-detail">
  						<text class="play-count">{{item.playMsg}}次观看</text>
  						<text class="comment-count">{{item.commentCount}}条评论</text>
  					</view>
  				</view>
  			</view>
  		</view>
  		<!-- 评论列表 -->
  		<view class="comment-wrap">
  			<view class="comment-title">
  				评论{{commentData.commentTotalCount}}
  			</view>
  			<view class="comment-list">
  				<view class="comment-item" v-for="(item,index) in commentData.commentList" :key="index">
  					<view class="comment-user">
  						<image :src="item.userIconSrc" mode="widthFix" class="comment-user-image"></image>
  					</view>
  					<view class="comment-info">
  						<view class="comment-detail">
  							<text class="author">{{item.username}}</text>
  							<text class="date">{{item.commentDate}}</text>
  						</view>
  						<view class="comment-content">
  							{{item.commentInfo}}
  						</view>
  					</view>
  				</view>
  			</view>
  		</view>
  	</view>
  </template>

  <script>
  	import config from "../../common/config.js"
  	export default {
  		data() {
  			return {
  				videoInfo: null,
  				otherList: [],
  				commentData: null
  			}
  		},
  		onLoad(options) {
  			const videoId = options.id
  			this.getCurentVideo(videoId)
  			this.getOtherList()
  			this.getCommentList(videoId)
  		},
  		methods: {
  			getCurentVideo(videoId) {
  				uni.request({
  					url: config.url + "/videoDetail?id=" + videoId,
  					success: res => {
  						const result = res.data
  						// console.log(result);
  						if (result.code === 0) {
  							this.videoInfo = result.data.videoInfo
  						}
  					}
  				})
  			},
  			getOtherList() {
  				console.log(config.url + "/othersList");
  				uni.request({
  					url: config.url + "/othersList",
  					success: res => {
  						const result = res.data
  						// console.log(result);
  						if (result.code === 0) {
  							this.otherList = result.data.othersList
  						}
  					}
  				})
  			},
  			getCommentList(videoId) {
  				console.log(config.url + "/commentsList?id=" + videoId);
  				uni.request({
  					url: config.url + "/commentsList?id=" + videoId,
  					success: res => {
  						const result = res.data
  						console.log(result);
  						if (result.code === 0) {
  							this.commentData = result.data.commentData
  						}
  					}
  				})
  			}
  		}
  	}
  </script>