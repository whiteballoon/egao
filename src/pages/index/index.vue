<template>
  <div>
    <img class="indexImg" :src="indexImgUrl" background-size="cover" />
    <div>
      <div class="confirmBtnBox">
        <label for="#">输入群名称:</label>
        <input type="text" v-model="QunName" placeholder="例如:红包群/美女群/找对象群等"/>
      </div>
      <div class="confirmBtn">
        <button @click="okclick" >立即生成</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      indexImgUrl: 'https://puui.qpic.cn/fans_admin/0/3_1680187318_1570539746179/0',
      QunName: '',
    }
  },

  methods: {
    okclick () {
      // console.log('QunName', this.QunName)
      if(this.QunName==''){
        wx.showToast({
          title: '请输入要生成的群名称',
          icon: 'none',
          duration: 2000
        })
      }else{
         let shareInfo = {
            qunName: this.QunName
          }
          wx.navigateTo({
            url: '/pages/demo/main?shareInfo=' + JSON.stringify(shareInfo)
          })
      }
    }
  }
}
</script>

<style scoped>
.indexImg {
  height:410rpx;
  width:750rpx;
}
.confirmBtnBox {
   width:90%;
   height: 23px;
   margin: 0 auto;
}
.confirmBtnBox label {
  display:inline-block;
  width:30%;
  height: 23px;
  line-height: 23px;
  font-size: 14px;
  vertical-align: bottom;
}
.confirmBtnBox input {
  display:inline-block;
  width:70%;
  height: 23px;
  line-height: 23px;
  font-size: 14px;
  vertical-align: bottom;
}
.confirmBtn button {
   width:90%;
   background-color: #fb5f54;
   color: #fff;
   height: 35px;
   line-height: 35px;
  font-size: 16px;
  margin-top: 10px;
}
</style>
