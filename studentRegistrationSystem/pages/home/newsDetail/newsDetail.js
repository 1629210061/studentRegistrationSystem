// pages/home/newsDetail/newsDetail.js

const app = getApp()

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
    var id = options.id
    this.getNewsDetail(id)
  },

  getNewsDetail(id){
    var that = this
    wx.request({
      url: app.globalData.request_url +'/news/findNewsById',
      data: {
        id:id
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          news:res.data
        })
      },

    })
  }
})