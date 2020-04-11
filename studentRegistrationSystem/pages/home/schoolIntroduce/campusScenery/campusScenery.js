// pages/home/schoolIntroduce/campusScenery/campusScenery.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCampusScenery()
  },
  // 图片放大预览
  previewImage(e){
    var index = e.currentTarget.dataset.index
    wx.previewImage({
      current: this.data.imageList[index],
      urls: this.data.imageList,
    })
  },
  // 获取图片
  getCampusScenery(){
    var that = this
    wx.request({
      url: app.globalData.request_url +'/school/findCampusScenery',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data)
        that.setData({
          imageList:res.data.content.split(",")
        })
      },
    })
  }
})