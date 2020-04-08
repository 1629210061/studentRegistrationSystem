// pages/home/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modeList:[{
      id:0,
      value:'按时报到',
      checked:'true'
    },{
      id:1,
      value:'请假'
    },{
      id:2,
      value:'放弃入学资格'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  chooseMode(e){
    console.log(e.detail.value)
  }
})