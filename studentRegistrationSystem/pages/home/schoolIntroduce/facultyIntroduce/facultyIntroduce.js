// pages/home/schoolIntroduce/facultyIntroduce/facultyIntroduce.js
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

  },
  // 选择器触发事件
  bindPickerChange(e) {
    this.setData({
      index:e.detail.value
    })
  },
  // 搜索事件
  search(e){
    console.log(e.detail.value)
  }
})