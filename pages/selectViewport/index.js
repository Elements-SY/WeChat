// pages/selectViewport/index.js
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
    
    // 这段代码的意思,获取id为productServe节点的尺寸和位置信息以及属性信息
    query.select('#selectViewport').boundingClientRect((res) => { 
      console.log(res)
    }).selectViewport().scrollOffset((res) => { 
      // 这段代码的意思,获取id为selectViewport节点滚动的位置以及滚动区域的大小
      // 我们发现selectViewport相对的并不是id为productServe节点的信息，而是相对Viewport视口的信息
      console.log(res)
    })    

    // 这段代码的意思,获取id为selectViewport节点滚动的位置以及滚动区域的大小
    // query.selectViewport().scrollOffset((res) => { 
    //   console.log(res)
    // })

    query.exec((res) => { // 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。
      console.log(res)
    })

  },

  nextRouter (){
    wx.navigateTo({
      url: '/pages/exec/index'
    })
  },
})
