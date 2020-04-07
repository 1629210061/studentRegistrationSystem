//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    PageCur: 'home',
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
    console.log(this.data.PageCur)
  },

})