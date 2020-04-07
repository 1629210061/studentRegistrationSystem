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
    canIUse: true
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log(app.globalData.userInfo)
      // 获取用户信息
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
        console.log(this.data.userInfo)
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
    }
  }


})