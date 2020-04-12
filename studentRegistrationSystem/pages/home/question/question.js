// pages/home/question/question.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionList:null,
    answer:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getQuestionList()
  },

  showModal(e) {
    var id = e.currentTarget.dataset.id-1
    this.setData({
      modalName: e.currentTarget.dataset.target,
      answer:this.data.questionList[id].answer
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  getQuestionList(){
    var that = this
    wx.request({
      url: app.globalData.request_url +'/question/findAllQuestion',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data)
        that.setData({
          questionList:res.data
        })
      },
    })
  },


})