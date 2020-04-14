// pages/student/student.js

const app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isRequest: false
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // 获取用户信息
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })

          }
        })
      }

    },

  },
  methods: {
    // 页面跳转
    gotojump: function(e) {
      console.log(e.currentTarget.dataset.route)
      wx.navigateTo({
        url: e.currentTarget.dataset.route,
      })
    },
    // 获取用户信息
    getUserInfo: function (e) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      this.postUserInfo(this.data.userInfo)
    },
    // 发送用户信息
    postUserInfo(userInfo) {
      console.log(userInfo)
      var that = this
      wx.request({
        url: app.globalData.request_url + '/student/addStudent',
        data: {
          nickname: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          openId: app.globalData.openId
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'GET',
        success: function (res) {
          that.data.isRequest = true
        },
      })
    }


  }


})