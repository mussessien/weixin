// pages/myget/myget.js
const db=wx.cloud.database()
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"",
    id:"",
    data:"",
    jldata:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:"getData"
    }).then(res=>{
     this.setData({
       openid:res.result.openId
     })
     console.log(this.data.openid)
     db.collection("demolist3").where({openid:this.data.openid}).get().then(res=>{
       this.setData({
         data:res.data
       })
      // console.log(res)
      for(var count=0;count<this.data.data.length;count++){  
        db.collection("demolist1").where({ _id:this.data.data[count].id}).get().then(res=>{
        this.setData({
          jldata:res.data
        })
      })}
     
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