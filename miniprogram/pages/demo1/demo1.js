// pages/demo1/demo1.js
const db=wx.cloud.database()
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  Objdata:{}
  },


  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    db.collection("demolist2").get().then(res=>{
      this.setData({
        Objdata:res.data
      })
  })
//   db.collection("demolist2").where({ _openid:this.data.openid
//   }).get().then(res=>{
//    this.setData({
//      data:res.data
//    })
// app.globalData.data=res.data
// console.log(app.globalData.data)
  // })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})