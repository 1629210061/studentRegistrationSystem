// pages/home/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 报到方式
    modeIndex: 0,
    modeList: [{
      id: 0,
      value: '按时报到',
      checked: 'true'
    }, {
      id: 1,
      value: '请假'
    }, {
      id: 2,
      value: '放弃入学资格'
    }],
    // 交通工具
    trafficIndex: 0,
    trafficList: ['飞机', '动车', '汽车', '其他'],

    // 按时报到数据
    name: '',
    studentId: '',
    faculty: '',
    class: '',
    phone: '',
    traffic: '',
    trafficNumber: '',
    // 预计到达时间
    arriveTime: '2020-09-01',
    // 是否需要住宿
    isAccommodation: false,
    roomNumber: '',
    isShow: false,

    // 请假模块数据
    leaveStart:'2020-09-01',
    leaveEnd:'2020-09-02',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 选择报到方式
  chooseMode(e) {
    console.log(e.detail.value)
    this.setData({
      modeIndex: e.detail.value
    })
  },
  // 交通方式选择
  trafficChange(e) {
    this.setData({
      trafficIndex: e.detail.value
    })
    console.log(this.data.trafficIndex)
  },
  // 预计到达日期
  dateChange(e) {
    this.setData({
      arriveTime: e.detail.value
    })
  },
  // 是否需要住宿
  isAccommodation(e) {
    this.setData({
      isAccommodation: e.detail.value,
      isShow: !this.data.isShow
    })
  },
  // 请假开始时间改变
  startDateChange(e){
    this.setData({
      leaveStart:e.detail.value
    })
  },
  // 请假结束时间改变
  endDateChange(e){
    this.setData({
      leaveEnd:e.detail.value
    })
  }
})