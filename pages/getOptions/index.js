// pages/getOptions/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
     // console.log(options)
    //  监听获取pages/eventChannel/index路由中发布的事件
     const eventChannel = this.getOpenerEventChannel()
     eventChannel.on('someEvent', res =>{
      // console.log(res)
      this.setData({
        title: res.data
      })
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },



})