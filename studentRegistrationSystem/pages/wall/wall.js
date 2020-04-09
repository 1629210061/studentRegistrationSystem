// pages/wall/wall.js

Component({
  options: {
    addGlobalClass: true,
  },

  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    isCard:false,
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoPublish(){
      wx:wx.navigateTo({
        url: '/pages/wall/publish/publish',
        
      })
    },
  
  }
})
