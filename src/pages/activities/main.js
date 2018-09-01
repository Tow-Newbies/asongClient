
import Vue from 'vue'
import activities from './activities.vue'

const app = new Vue(activities)
app.$mount()

export default {
  config: {
    // "navigationBarBackgroundColor": "#ffffff",
    // "navigationBarTextStyle": "black",
    // "navigationBarTitleText": "微信接口功能演示",
    "backgroundColor": "#000000",
    // "backgroundTextStyle": "light"
  }
}