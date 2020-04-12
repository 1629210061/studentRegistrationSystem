// pages/home/home.js

const app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 页面的初始数据
   */
  data: {
    news:[],
    cardCur: 0,
    // 轮播图
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586162802928&di=f7e481ab2129cec046bbd8b4a32bf4b2&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181025%2F8ae5f3d76d034c0ab4d7a209a9718440.jpeg',
    }, {
      id: 1,
      type: 'image',
      url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1107145329,646131179&fm=26&gp=0.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586162888018&di=4475104c01bb7a78461b416f2079594d&imgtype=0&src=http%3A%2F%2Fupload.univs.cn%2F2013%2F0819%2F1376884385659.jpg',
    }, {
      id: 3,
      type: 'image',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586162888024&di=6f64caab4c3ee5208776f3457bfac609&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D78b3674b92eef01f4d1418cdd0fe99e0%2F3fa99925bc315c60f894b5c08bb1cb1349547770.jpg',
    }],
    // icon图标
    iconList: [{
      id: 0,
      url: '/images/indexIcon/school.png',
      title: '学校概况',
      route: '/pages/home/schoolIntroduce/schoolIntroduce'

    }, {
      id: 1,
      url: '/images/indexIcon/register.png',
      title: '报到注册',
      route: '/pages/home/register/register'

    }, {
      id: 2,
      url: '/images/indexIcon/admission_guide.png',
      title: '入学指南',
      route: '/pages/home/guide/guide'

    }, {
      id: 3,
      url: '/images/indexIcon/question.png',
      title: '问题咨询',
      route: '/pages/home/question/question'
    }, ]
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.getNews()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  methods: {
    DotStyle(e) {
      this.setData({
        DotStyle: e.detail.value
      })
    },
    // cardSwiper
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
    // icon页面跳转
    gotoJump(e) {
      var id = e.currentTarget.dataset.id
      console.log(id)
      wx: wx.navigateTo({
        url: this.data.iconList[id].route,
      })
    },
    // 发送请求新闻内容
    getNews() {
      var that = this
      wx.request({
        url: app.globalData.request_url + '/news/findAll',
        header: {
          'content-type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          that.setData({
            news: res.data,
          })
          console.log(that.data.news)
        },
      })
    },
    // 进入新闻详情
    newsDetail(e){
      var id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/home/newsDetail/newsDetail?id='+id,
      })
    }

  }

})