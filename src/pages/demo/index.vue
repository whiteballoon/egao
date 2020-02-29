<template>
  <div>
    <div class="qrcodeBox">
      <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" :dirty="true" />
    </div>
    <button class="saveBtn" @click="savePoster">保存到相册</button>
    <button class="saveBtn" open-type="share">邀请好友玩</button>
  </div>
</template>

<script>
import Card from "../../palette/card";

// const userInfo = {
//   avatar:
//     "https://qhyxpicoss.kujiale.com/r/2017/12/04/L3D123I45VHNYULVSAEYCV3P3X6888_3200x2400.jpg@!70q"
// };

// const customStyle = "margin-left:40rpx";
const customStyle = "";

export default {
  data() {
    return {
      shareImg: "",
      customStyle: customStyle,
      template: "",
      shareInfo: {}
    };
  },
  methods: {
    onImgOk(e) {
      this.shareImg = e.mp.detail.path;
      // 两种路径是一样的
      // console.log(e.mp.detail.path);
      // console.log(e.target.path);
    },
    savePoster() {
      if (this.shareImg) {
        wx.saveImageToPhotosAlbum({
          filePath: this.shareImg,
          success: result => {
            wx.showToast({
              title: "海报已保存，快去分享给好友吧。",
              icon: "none"
            });
          }
        });
      }
    }
  },
  mounted() {
    const options = this.$root.$mp.query;
    this.shareInfo = JSON.parse(options.shareInfo);
    const card = new Card();
    this.template = card.do(this.shareInfo);
  },
  onShareAppMessage: function(res) {
    return {
      title: "邀请你加入群聊" + this.shareInfo.qunName + ",进入可查看详情",
      path: "/page/index/main"
    };
  }
};
</script>

<style scoped>
.saveBtn {
  width: 90%;
  background-color: #fb5f54;
  color: #fff;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  margin-top: 10px;
}

.qrcodeBox {
  height: 900rpx;
}
</style>
