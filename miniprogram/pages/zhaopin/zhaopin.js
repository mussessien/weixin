const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  id:null
  },
  btnData(res){
    var{title,zhiwei,daiyu,dianhua,dizhi,tiaojian}=res.detail.value;
   db.collection("demolist2").add({
     data:{
      title:title,
      zhiwei:zhiwei,
      daiyu:daiyu,
      dianhua:dianhua,
      dizhi:dizhi,
      tiaojian:tiaojian
     }
   }).then(res=>{
     this.setData({
       id:res._id
     })
   })
   wx.redirectTo({
     url: '/pages/mylist/mylist',
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