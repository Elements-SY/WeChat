// pages/boundingClientRect/index.js
//获取应用实例
const app = getApp()

Page({
  data: { 
    
  },
  onLoad: function () {
                                                   
  }, 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.queryMultipleNodes() 
  },                                                                
  queryMultipleNodes(){
    //声明节点查询的方法
    const query = wx.createSelectorQuery() // 创建节点查询器 query
    
    // 这段代码的意思,获取id为boundingClientRect节点的尺寸和位置信息以及属性信息
    query.select('#boundingClientRect').boundingClientRect((res) => { 
      console.log(res)
    })

    // 这段代码的意思,获取id为txt_node节点的尺寸和位置信息以及属性信息   
    query.select('#txt_node').boundingClientRect((res) => {
      console.log(res)
    }) 

    query.selectViewport().scrollOffset((res) => {
      console.log(res)
    })

    query.exec((res) => {
      console.log(res)
    })
  },
  nextRouter (){
    wx.navigateTo({
      url: '/pages/selectViewport/index'
    })
  },
})
