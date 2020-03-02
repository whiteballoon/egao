// 名片分享样式
export default class LastMayday {
  cardInfo = {}

  do(cardInfo) {
    this.cardInfo = JSON.parse(JSON.stringify(cardInfo))
    return this._template()
  }
  // url: this.cardInfo.avatar,

  TEXT_SMALL = {
    fontSize: '24rpx'
  }

  _template() {
    return ({
      "width": "750rpx",
      "height": "900rpx",
      "background": "#fff",
      "views": [
        {
          "type": "text",
          "text": this.cardInfo.qunName,
          "css": {
            "color": "#000000",
            "background": "rgba(0,0,0,0)",
            "width": "200rpx",
            "height": "37.18000000000001rpx",
            "top": "66rpx",
            "left": "160rpx",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "padding": "0rpx",
            "fontSize": "30rpx",
            "fontWeight": "normal",
            "maxLines": "2",
            "lineHeight": "37.51800000000001rpx",
            "textStyle": "fill",
            "textDecoration": "none",
            "fontFamily": "",
            "textAlign": "left"
          }
        },
        {
          "type": "image",
          // "url": "https://i.loli.net/2020/03/01/wPoOQuJRFT93ykI.png",
          "url": "https://jiaqunzhenggu.h5.wucainiao.com/1.png",
          "css": {
            "width": "120.50000000000001rpx",
            "height": "120.50000000000001rpx",
            "top": "19rpx",
            "left": "19rpx",
            "rotate": "0",
            "borderRadius": "10rpx",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "mode": "scaleToFill"
          }
        },
        {
          "type": "text",
          "text": '该二维码7天内（' + this.cardInfo.month + '月' + this.cardInfo.day + '日前）有效，重新进入将更新',
          "css": {
            "color": "#aaa",
            "background": "rgba(0,0,0,0)",
            "width": "600rpx",
            "height": "22.88rpx",
            "top": "780rpx",
            "left": "125rpx",
            "rotate": "0",
            "borderRadius": "",
            "borderWidth": "",
            "borderColor": "#000000",
            "shadow": "",
            "padding": "0rpx",
            "fontSize": "20rpx",
            "fontWeight": "normal",
            "maxLines": "2",
            "lineHeight": "23.088000000000005rpx",
            "textStyle": "fill",
            "textDecoration": "none",
            "fontFamily": "",
            "textAlign": "left"
          }
        },
        {
          "type": "qrcode",
          "content": "https://jiaqunzhenggu.h5.wucainiao.com",
          "css": {
            "color": "#000000",
            "background": "#ffffff",
            "width": "550.75rpx",
            "height": "550.75rpx",
            "top": "177rpx",
            "left": "100.75rpx",
            "rotate": "0",
            "borderRadius": ""
          }
        }
      ]
    })
  }
}
