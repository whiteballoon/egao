<template>
  <div>
    <div class="box" style="background-image: url('../../../static/image/1.png');">
      <div class="inputBox">
        <input type="text" v-model="QunName" placeholder="例如:红包群/美女群/找对象群等" />
      </div>
      <div class="confirmBtn" @click="SeeAds"></div>
    </div>
    <div class="bgc"></div>
  </div>
</template>

<script>
import getDates from "../../utils/date";
var videoAd = null;

let dayArray = getDates(8)

export default {
  data() {
    return {
      indexImgUrl:
        "https://puui.qpic.cn/fans_admin/0/3_1680187318_1570539746179/0",
      QunName: "",
      timer: '',
      shareInfo: {},
      id: ''

    };
  },

  methods: {
    // okclick() {
    //   let shareInfo = {
    //     qunName: this.QunName == "" ? "富婆群" : this.QunName,
    //   };
    //   qq.navigateTo({
    //     url: "/pages/demo/main?shareInfo=" + JSON.stringify(shareInfo)
    //   });
    // },
    adGet: function() {
      if (qq.createRewardedVideoAd) {
        // 加载激励视频广告
        videoAd = qq.createRewardedVideoAd({
          adUnitId: "eb21007b209789a02b21cdac0602319d" //你的广告key
        });
        //捕捉错误
        videoAd.onError(err => {
          // 进行适当的提示
          qq.showToast({
            title: "广告数据错误，请稍后再试",
            icon: "none",
            duration: 2000
          });
        });
        // 监听关闭
        videoAd.onClose(status => {
          if ((status && status.isEnded) || status === undefined) {
            // 正常播放结束，下发奖励
            this.shareInfo.qunName = this.QunName == "" ? "富婆群" : this.QunName
            qq.navigateTo({
              url: "/pages/demo/main?shareInfo=" + JSON.stringify(this.shareInfo)
            });
          } else {
            // 播放中途退出，进行提示
            // qq.showModal({
            //   title: '提示',
            //   content: '这是一个模态弹窗',
            //   success (res) {
            //     if (res.confirm) {
            //       console.log('用户点击确定')
            //     } else if (res.cancel) {
            //       console.log('用户点击取消')
            //     }
            //   }
            // })
          }
        });
      }
    },
    //激励广告展示，函数名称是随意的，和前面对应就行了。
    openVideoAd() {
      console.log("打开激励视频");
    },
    SeeAds() {
      qq.showToast({title: '拼命生成中', icon: 'loading', duration: 1500});
      this.timer = setTimeout(() => {
        qq.showModal({
          title: "陪我看个视频，我就把图给你哦",
          // cancelText: '残忍拒绝',
          // confirmText: '陪他',
          success: res => {
            if (res.confirm) {
              this.adGet(); //这个地方就是调用了广告函数，然后直接展示

              // 在合适的位置打开广告
              if (videoAd) {
                videoAd.show().catch(err => {
                  // 失败重试
                  videoAd.load().then(() => videoAd.show());
                });
              }
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          }
        });
      }, 1500)
    }
  },
  created() {
    console.log(dayArray)
    this.shareInfo = {
              month: dayArray[7].month,
              day: dayArray[7].day
            };
  },
  onUnload() {
    clearInterval(this.timer)
  }
};
</script>

<style scoped>
.bgc {
  position: absolute;
  width: 750rpx;
  height: 145rpx;
  background-color: #35509a;
  top: 1316rpx;
}
.box {
  width: 750rpx;
  height: 100vh;
  background-size: contain;
  position: relative;
}
.inputBox {
  width: 400rpx;
  height: 90rpx;
  position: absolute;
  left: 260rpx;
  top: 860rpx;
}
.inputBox input {
  margin-top: 5rpx;
  width: 380rpx;
  height: 80rpx;
  background-color: #fff;
}
.confirmBtn {
  width: 400rpx;
  height: 90rpx;
  position: absolute;
  left: 170rpx;
  top: 1004rpx;
}
</style>
