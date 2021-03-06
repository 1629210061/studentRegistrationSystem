// pages/home/guide/guide.js

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
    this.getGuideList()
  },

  getGuideList(){
    var that = this
    wx.request({
      url: app.globalData.request_url +'/guide/findAllGuide',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          guideList:res.data
        })
      },
    })
  },
  guideDetail(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/home/guide/guideDetail/guideDetail?id='+id,
    })
  }
})