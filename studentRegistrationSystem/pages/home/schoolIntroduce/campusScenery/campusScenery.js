// pages/home/schoolIntroduce/campusScenery/campusScenery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 图片放大预览
  previewImage(){
    wx:wx.previewImage({
      current: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586331140833&di=8f349e5840c2b4cb72f795cf52133f4e&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131029%2F20131029092759-1176572706.jpg',
      urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586331140833&di=8f349e5840c2b4cb72f795cf52133f4e&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131029%2F20131029092759-1176572706.jpg',],
    })
  }
})