// pages/exec/index.js
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
    
    // 这段代码的意思,获取id为exec节点的尺寸和位置信息以及属性信息
    query.select('#exec').boundingClientRect((res) => { 
      console.log(res)
    })
    // 如果不调用查询结果集exec的方法，那么整个查询都不会返回结果，也就是不管是查询boundingClientRect
    // 还是查询其他的也罢最后都必须要调用exec的方法
    // 为了证明可以将下述代码exec的方法注释掉看看即可
    query.exec((res) => { // 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。
      console.log(res)
    })

  },
})
