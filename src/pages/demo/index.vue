<template>
  <div>
    <div class="qrcodeBox">
      <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" :dirty="true" />
    </div>
    <button class="saveBtn savePhoto" @click="savePoster">保存到相册</button>
    <button class="saveBtn friend" open-type="share">邀请好友玩</button>
  </div>
</template>

<script>
import Card from "../../palette/card"
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
    console.log('shareInfo',this.shareInfo)
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
  width: 208px;
  height: 45px;
  color: #fff;
  line-height: 90rpx;
  font-size: 16px;
  margin-top: 20rpx;
  background-size: contain;
  background-repeat: no-repeat;
}

.saveBtn::after {
  border: 0;
}

.savePhoto {
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb0AAABgCAIAAAAGmztWAAAACXBIWXMAAAsSAAALEgHS3X78AAAE1klEQVR4nO3cf2iUdRzA8cfzR+l2hogba2S6cDiY/ZGhWKAI2j/L1CDQGGQJaQpBClbWP5OSJCrQJEEKg0D/iApS+0PJRsaYsChdKFfNmc7pYsnm3cQtt5Bbc93trn3/dPd6/bU9zzH2fPjy5nnunufGDQwMRHklznfWN7Y2Nbcnzncme3rzvxjgbjFn1vT7S4qXLJw1v7qsrCQ++v86XzcPf5vYf6ip/c+kZQCMbUsWPLhmxbz51WWjOcqRu5k431m3u/7X1k5LBSgcNUsrt6xfFC+alP+IR+jmwa+bP/ikwVIBClDZjOJ3X3+icvb0PIee2c263fVHTiSsFqBgFU+ZtO+tJ/OkMzb8l/c/bhBNoMAle3o3vnk4cT7nG5V3ulnf2HrocHOhDwzg33ReT418B9FgN6+neut215sWQFqyp3fH7u9GHMZgN/cfanJvJsBw9acufH+qJXsksfTJpit0gGzbdn7e1Z3K2BxL399uXADZbo2bVlO7PSOdugmQT1tH74rabcPTebubngsCyGVKUUnzuZbNr703tD/W1NxuXAC53Dt5WhRFR483nGw8nX5JLJm6aVwAuYyfWJTeM3TKGctzTzwAQy62dRw53pD5nCUAeRz84phuAgQ46nwTINTJxtO6CRDgj7arugkQ4KJuAoTSTYAwugkQRjcBwugmQBjdBAijmwBhdBMgjG4ChNFNgDC6CRBGNwHC6CZAGN0ECKObAGF0EyCMbgKE0U2AMLoJEEY3AcLoJkAY3QQIo5sAYXQTIIxuAoTRTYAwugkQRjcBwugmQBjdBAijmwBhdBMgjG4ChNFNgDC6CRBGNwHC6CZAGN0ECKObAGF0EyCMbgKE0U2AMLoJEEY3AcLoJkAY3QQIo5sAYXQTIIxuAoTRTYAwugkQRjcBwugmQBjdBAgTKyuJGxnA6OkmQD79/X0Ze2OVs6cbGUAufTeuZeyJxYsmlc0oNjGAESVTHRmbb38utGThLOMCGFGyuz1j8+1url1RbVwA2fpuXOu7eT1j8+1ulpXEa5ZWmhhAhs7ORPbGwfs3X1zziHEBDHcz1ZHsasvYWF310GA3y0rir7ywyMQA0vr7+660/5w9jHlVFXeeF1q7otrVOkBax+Ufs9/ZfKC8ZGZ56X+es9yyftGcWW7nBArdlUuN2VfoURTVLHssiqJxAwMDGTtWrt/X/tf4Qh8bUKhyRTOKop9OHMg830zbs2N1d+cv2Y8WAYxtfTeuXfjtWK5orl29bGZ56cjfhzSzvPT5Zx5tTXzTfa1FPYFCcKsvdeVS44WWE9nvaaZNjRe9+nJt+ucRrtPTFj+1uflcS2z8hCnFpfGp5ZOLS2OxidYPMJbc6kulkleT3Zd7kpkPU2b48J0tzz69PL0tZze7ulOLV2662Hbnb8XGT5h4jy9PAsaC/lt/5zq1zLbxuVU739gwtDlnN6MoOnO2pXZT3fB0AhSatauX7d21dfhB5+tm+qyzdlPdD6fOWCpAAXp7+4aX1q3KOO7/6Wbarj2ffXTgq+7rKcsGKBDVcyv27to6r6oi+3BH1c30iee+T79UT2DMq55bsXHdqqFPgbKNtptDjhxvaD77+8nG013dqeZzLZYQcLebGi+aV1Vx39Tixxc8XLN8UfomzVyiKPoHb958WSJJZ/UAAAAASUVORK5CYII=');
}

.friend {
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAABgCAIAAADtrIBVAAAACXBIWXMAAAsSAAALEgHS3X78AAAEuUlEQVR4nO3cTWiTdxzA8cdo02laCwbHGibWgd3AymAFhV3qdp29K9tV8CR4Fwdj5x12GsrOc4MNht1hDjbDDtLBqpt1aqo0nSOVaqo1SV/St1FSfMmb/R9tPp9TeJ4c+vz48+V58jxPt6yurkZNlZdWstPzD0uL+dJi828CvFpSXe3dO+OprvbQv7pZOnMzC5kHc5mpWYsB2MTiW2MHU4mD3Yn4ttgGj7J+OgsLy1fGZ7LT81YL0CIqAe3f07mRw62Tzuz0/OWxx+XlFQsGaDXJRNvggeRLTz+r05mZmr1857HVArSs+NbYYF8ymWhrMoAXyqqbAOXllYuj+cLCcpNJPEtnvrSomwCVel66NV1eavi75Xo6y0srP9+aNjGAinxpMX27YRXX03l9slRsenYK0GrGZ8rnvrvaMJ3lpZXruZJVAVBlLF/++PQPhVK5anus8jSSR5EAau1/d8/E5JOTZ4aq6rmeThMDqKvnrd1j2XxVPaUToJm9+7vXrtyz+c++vPz0a7HczIKpATSSfKOrsif9x0R6OFv5vNF33QFaU0fX9qfH/cXXV9bTOfmk+s4RAHVNPigO/Zpx1gkQ5puLo9IJEGYsmy+UytIJEGZkNCedAGEy43npBAiTmypKJ0CYyamCdAIEk06AYNIJEEw6AYJJJ0Aw6QQIJp0AwaQTIJh0AgSTToBg0gkQTDoBgkknQDDpBAgmnQDBpBMgmHQCBJNOgGDSCRBMOgGCSSdAMOkECCadAMGkEyCYdAIEk06AYNIJEEw6AYJJJ0Aw6QQIJp0AwaQTIJh0AgSTToBg0gkQTDoBgkknQDDpBAgmnQDBpBMgmHQCBJNOgGDSCRBMOgGCSSdAMOkECCadAMGkEyCYdAIEk06AYNIJEEw6AYJJJ0CwWGf7VlMDCBLrkE6AQLHO17aZGUAjuYl87Z61C3YnngCNTN9/XLtn7TZRqqvd0ADqun3jv9rNa+k82J0wMYBaxZm5R/li7fa1dCYTbd0744YGUGXk91u1G3v3Jdef6+zf02liAM8rzsxlbuZqR9KZiK+nM9XV3ueyHeA56aGrdcfx7KwziqL393UlE23GBhBF0ZVfRidzj+pO4r2+1AsvYg4eSKonwNhf925cm6g7hoFDe59dsFfEt8XUE2hxo8N305f+bjSDgcM9URRtWV1drd2Xzkzffjjf6vMDWkx5YTF98erE+INGh929u+PHc8ejKKr/FuZA7657Y//cebKc2pu0doBNr7ywmLn278jw3fLCYpNjPXvqSOVD/bPOipNnhsbvF94+8GbPO6mOru0WD7D55CbyE5nJsZu55tGMouijD3o/PTVQ+dwsnYVS+ZPT308+WHuSPt7elkx2RFG06/Wd7e1+DAVeYcUns4WZuSiKGt1Dr7W/J/nV50c7E+tvDzVLZxRFmfH8yTNDxdmyVQK0rKpuvjydlXPPk2eGxrJ1/u0SwKY3cGjv2VNHnu/mhtJZcf7Cn+e/HbFIgNbRsSN+4lj/8cG+2kPeaDrXfhSYKpy7MPLTbxkrB9jcOnbEj37Ye+JYf9XJ5lMB6awolMrp4Wx6OJsZz1fuIAFsDvt7kr37kv193QOHexpFM4qiKIr+B3z0eDXpEMO4AAAAAElFTkSuQmCC');
}

.qrcodeBox {
  height: 900rpx;
}
</style>
