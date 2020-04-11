// pages/home/schoolIntroduce/schoolIntroduce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moduleList: [{
        id:0,
        title: '学校简介',
        image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2023704797,448668337&fm=26&gp=0.jpg',
        route: '/pages/home/schoolIntroduce/article/article?id=0'
      }, {
        id: 1,
        title: '学校领导',
        image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=969032563,99986776&fm=26&gp=0.jpg',
        route: '/pages/home/schoolIntroduce/article/article?id=1'
      },
      {
        id:2,
        title: '学院介绍',
        image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2543597163,1350397026&fm=26&gp=0.jpg',
        route: '/pages/home/schoolIntroduce/facultyIntroduce/facultyIntroduce'
      },
      {
        id:3,
        title: '校园风光',
        image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4259868233,1922299853&fm=26&gp=0.jpg',
        route: '/pages/home/schoolIntroduce/campusScenery/campusScenery'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  gotoJump(e){
    var id = e.currentTarget.dataset.id
    console.log(id)
    console.log(e)
    wx:wx.navigateTo({
      url: this.data.moduleList[id].route,
    })
  }
})