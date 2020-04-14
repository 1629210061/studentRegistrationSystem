// pages/home/register/register.js

const app = getApp()

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
    }, {
      id: 1,
      value: '请假',
    }, {
      id: 2,
      value: '放弃入学资格',
    }],
    // 交通工具
    trafficIndex: 0,
    trafficList: ['飞机', '动车', '汽车', '其他'],

    // 预计到达时间
    arriveTime: '2020-09-01',
    // 是否需要住宿
    isAccommodation: false,
    isShow: false,
    // 请假时间
    leaveStart: '2020-09-01',
    leaveEnd: '2020-09-02',
    roomNumber: 0,
    checked: true,
    // 发送请求地址
    url: app.globalData.request_url + '/register/insertRegister',
    studentInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    this.getSutudentInfo()

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
      isAccommodation: !this.data.isAccommodation,
      isShow: !this.data.isShow
    })
  },
  // 请假开始时间改变
  startDateChange(e) {
    this.setData({
      leaveStart: e.detail.value
    })
  },
  // 请假结束时间改变
  endDateChange(e) {
    this.setData({
      leaveEnd: e.detail.value
    })
  },
  formSubmit(e) {
    console.log(e.detail.value)
    let info = e.detail.value
    if (this.data.modeIndex == 0) {
      this.onTimeRegister(info)
    } else if (this.data.modeIndex == 1) {
      this.leaveRegister(info)
    } else {
      this.giveUpRegister(info)
    }
    wx.showToast({
      title: '注册成功',
      icon: 'none',
      duration: 10000,
      mask: true,
      success: function(res) {
        wx.navigateTo({
          url: '/pages/index/index',
        })
      },

    })
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
      success: function(res) {
        console.log(res.data)
        that.setData({
          studentInfo: res.data
        })
        if (that.data.studentInfo.registerState != '未进行预报到') {
          that.getRegisterInfo()
          that.setData({
            url: app.globalData.request_url + '/register/updateRegisterByOpenid',
          })
        }else{
          that.setData({
            ['modeList[0].checked']: true
          })
        }
      },
    })
  },
  // 判断是否为数字
  isNumber(e) {
    console.log(e.detail.value)
    let value = this.validateNumber(e.detail.value)
    this.setData({
      roomNumber: value
    })
  },
  //数字限制  
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  // 按时报到请求
  onTimeRegister(info) {
    var that = this
    if (info.isAccommodation == "true") {
      info.isAccommodation = 1
    } else {
      info.isAccommodation = 0
    }
    wx.request({
      url: this.data.url,
      data: {
        realName: info.realName,
        studentId: info.studentId,
        faulty: info.faulty,
        className: info.className,
        phone: info.phone,
        traffic: info.trafficIndex,
        trafficNum: info.trafficNumber,
        arriveTime: info.arriveTime,
        isAccommodation: info.isAccommodation,
        roomNumber: this.data.roomNumber,
        openId: app.globalData.openId,
        type: this.data.modeIndex,
        registerState: '按时报到'

      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
    })
  },
  // 请假
  leaveRegister(info) {
    var that = this
    wx.request({
      url: this.data.url,
      data: {
        realName: info.realName,
        studentId: info.studentId,
        faulty: info.faulty,
        className: info.className,
        phone: info.phone,
        reason: info.reason,
        leaveStart: info.leaveStart,
        leaveEnd: info.leaveEnd,
        openId: app.globalData.openId,
        type: this.data.modeIndex,
        registerState: '请假'
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
    })
  },
  // 放弃入学资格
  giveUpRegister(info) {
    var that = this
    wx.request({
      url: this.data.url,
      data: {
        realName: info.realName,
        studentId: info.studentId,
        faulty: info.faulty,
        className: info.className,
        phone: info.phone,
        reason: info.reason,
        openId: app.globalData.openId,
        type: this.data.modeIndex,
        registerState: '放弃入学资格'
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
    })
  },
  formReset() {
    this.getSutudentInfo()
  },
  // 获取注册信息
  getRegisterInfo() {
    var that = this
    wx.request({
      url: app.globalData.request_url + '/register/findRegisterByOpenId',
      data: {
        openId: app.globalData.openId
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data)
        var register = res.data
        var type = res.data.type
       
        if (type == 0) {
          that.setData({
            roomNumber: res.data.roomNumber,
            arriveTime: res.data.arriveTime,
            trafficIndex: res.data.traffic,
            trafficNum: res.data.trafficNum,
          })
          if(res.data.isAccommodation==0){
            that.setData({
              isAccommodation:false,
              isShow:false
            })
          }else{
            that.setData({
              isAccommodation: true,
              isShow:true
            })
          }
        }else if(type==1){
          that.setData({
              leaveEnd:res.data.leaveEnd,
              leaveStart:res.data.leaveStart,
              reason:res.data.reason
          })
        }else{
          that.setData({
            reason:res.data.reason
          })
        }
        that.setData({
          modeIndex: res.data.type,
          ['modeList[' + res.data.type + '].checked']: true
        })
        console.log(that.data.modeList)
      },
    })
  }
})