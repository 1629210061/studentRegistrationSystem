//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    PageCur: 'home',
  },
  onLoad(options){
  },
  onShow(){

  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
    console.log(this.data.PageCur)
  },

})