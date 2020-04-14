// pages/wall/publish/publish.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    index: null,
    userInfo: null,
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  // 预览图片
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  // 添加图片
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  // 删除图片
  DelImg(e) {
    wx.showModal({
      title: '删除图片',
      content: '确定要删除该图片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }

      }
    })
  },
  // 动态内容
  contentInput(e) {
    this.setData({
      content: e.detail.value
    })
    console.log(e.detail.value)
  },
  // 发布动态
  publish() {
    wx.request({
      url: app.globalData.request_url + '/dynamic/insertDynamic',
      data: {
        openId: app.globalData.openId,
        content: this.data.content,
        imageUrl: JSON.stringify(this.data.imgList)
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        wx.showToast({
          title: '发布成功',
          icon: 'none',
          duration: 10000,
        })
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2]; //上一个页面
        //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
        console.log(prevPage)
        prevPage.setData({
          PageCur: 'wall'
        })
        wx.navigateBack({ //返回
          delta: 1
        })

      },

    })
  }
})