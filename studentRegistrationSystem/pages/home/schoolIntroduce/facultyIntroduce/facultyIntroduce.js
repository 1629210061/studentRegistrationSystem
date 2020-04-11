// pages/home/schoolIntroduce/facultyIntroduce/facultyIntroduce.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    facultyList: ['人文学院', '大数据学院'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getFacultIntroduce()
  },
  // 选择器触发事件
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
    this.getFacultIntroduce()
  },
  // 搜索事件
  search(e) {
    console.log(e.detail.value)
  },
  // 获取学院介绍
  getFacultIntroduce() {
    var that = this
    var name = this.data.facultyList[this.data.index]
    wx.request({
      url: app.globalData.request_url + '/school/findFaultyIntroduce',
      data: {
        name: name
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          content: res.data.content
        })
      },
    })
  }
})