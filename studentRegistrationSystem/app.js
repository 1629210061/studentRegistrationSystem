//app.js
App({
  onLaunch: function() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })

    // 登录
    wx.login({
      success: res => {
        var that = this
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: this.globalData.request_url + '/student/getOpenId',
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'GET',
          success: function(res) {
            that.globalData.openId = res.data


            // 获取用户信息
            wx.getSetting({
              success: res => {
                if (res.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                  wx.getUserInfo({
                    success: res => {
                      // 可以将 res 发送给后台解码出 unionId
                      that.globalData.userInfo = res.userInfo

                      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                      // 所以此处加入 callback 以防止这种情况
                      if (that.userInfoReadyCallback) {
                        that.userInfoReadyCallback(res)
                      }
                      that.postUserInfo(res.userInfo)

                    }
                  })
                }
              }
            })



          },
        })
      }
    })

  },
  globalData: {
    userInfo: null,
    request_url: 'http://localhost:8080',
    openId: null,
  },
  data: {
    isRequest: false
  },
  // 发送用户信息
  postUserInfo(userInfo) {
    console.log(userInfo)
    var that = this
    wx.request({
      url: this.globalData.request_url + '/student/addStudent',
      data: {
        nickname: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl,
        openId: this.globalData.openId
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function(res) {
        that.data.isRequest = true
      },
    })
  }


})