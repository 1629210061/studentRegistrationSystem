// pages/home/schoolIntroduce/article/article.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:null
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    if(id==0){
      this.getSchoolIntroduce()
    }else{
      this.getFacultyIntroduce()
    }
    
  },
  // 获取学校简介
  getSchoolIntroduce(){
    var that = this
    wx.request({
      url: app.globalData.request_url +'/school/findSchoolIntroduce',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          content:res.data.content,
          title:res.data.title
        })
      },
    })
  },
  getFacultyIntroduce(){
    var that = this
    wx.request({
      url: app.globalData.request_url + '/school/findLeader',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({
          content: res.data.content,
          title:res.data.title
        })
      },
    })
  }
})