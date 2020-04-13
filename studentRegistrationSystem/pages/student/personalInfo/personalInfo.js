// pages/student/personalInfo/personalInfo.js

const app = getApp()

Page({
  options: {
    addGlobalClass: true,
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSutudentInfo()
  },

  getSutudentInfo() {
    var that = this
    wx.request({
      url: app.globalData.request_url + '/student/findByOpenId',
      data: {
        openId: app.globalData.openId
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data)
        that.setData({
          studentInfo: res.data
        })
      },
    })
  },
  // 取消修改
  cancel() {
    this.setData({
      modalName: null
    })
  },
  //修改
  edit(e) {
    var value = e.currentTarget.dataset.value
    var id = e.currentTarget.dataset.id
    this.setData({
      modalName: e.currentTarget.dataset.target,
      value: value,
      id: id
    })

  },
  // 输入框失去焦点
  inputChange(e) {
    this.setData({
      value: e.detail.value
    })
  },
  // 提交确定
  submit(e) {
    console.log(this.data.value)
    console.log(this.data.id)
    var name = 'requestData.' + this.data.id
    console.log(name)
    this.setData({
      [name]: this.data.value,
      ['requestData.openId']: app.globalData.openId
    })
    this.updateStudent()
    this.cancel()
  },
  // 更新信息
  updateStudent() {
    var that = this
    wx.request({
      url: app.globalData.request_url + '/student/updateByOpenId',
      data: this.data.requestData,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.getSutudentInfo()
      },
    })
  }

})