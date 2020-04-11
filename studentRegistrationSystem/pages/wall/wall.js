// pages/wall/wall.js

const app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },

  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    dynamicList: null
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.getDynamicList()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoPublish() {
      wx.navigateTo({
        url: '/pages/wall/publish/publish',

      })
    },
    //获取全部动态
    getDynamicList() {
      var that = this
      wx.request({
        url: app.globalData.request_url + '/dynamic/findAll',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var dynamicList = res.data
          for (var i = 0; i < dynamicList.length; i++) {
            dynamicList[i].imageUrl = JSON.parse(dynamicList[i].imageUrl)
          }
          that.setData({
            dynamicList: dynamicList,
            
          })
          for(var i=0;i<dynamicList.length;i++){
            that.setData({
              ['dynamicList[' + i + '].isLike']: false
            })
          }        
          console.log(that.data.dynamicList)

        },
      })
    },
    // 点赞
    like(e) {
      var id = e.currentTarget.dataset.id - 1
      if (!this.data.dynamicList[id].isLike) {
        var likeNum = this.data.dynamicList[id].likeNum + 1
        this.setData({
          ['dynamicList[' + id + '].likeNum']: likeNum,
          ['dynamicList[' + id + '].isLike']: true
        })
        wx.request({
          url: app.globalData.request_url + '/dynamic/updateLikeNumById',
          data: {
            id: id+1,
            likeNum: likeNum
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }

    }
  }
})