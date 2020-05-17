// pages/eventChannel/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  nextRouter (){
    wx.navigateTo({
      url: '/pages/getOptions/index',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('someEvent', { data: 'test' })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})