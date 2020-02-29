import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '超好玩的加群整蛊',
    usingComponents: {
      'painter': '/static/painter/painter'
    }
  }
}
