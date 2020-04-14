// pages/home/schoolIntroduce/facultyIntroduce/facultyIntroduce.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    facultyList: ['人文学院', '电子与信息工程学院','商学院','教师教育学院','外国语学院','生命科学学院','航空工程学院','建筑工程学院','医学院','马克思主义学院','继续教育学院'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var name = this.data.facultyList[this.data.index]
    this.getFacultIntroduce(name)
  },
  // 选择器触发事件
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
    var name = this.data.facultyList[this.data.index]
    this.getFacultIntroduce(name)
  },
  // 搜索事件
  search(e) {
    console.log(e.detail.value)
    var name = e.detail.value
    this.getFacultIntroduce(name)
    
  },
  // 获取学院介绍
  getFacultIntroduce(name) {
    var that = this
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
        console.log(res.data)
        that.setData({
          faculty: res.data
        })
      },
    })
  }
})