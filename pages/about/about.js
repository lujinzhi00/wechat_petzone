// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	number:'18666403716'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  callMe:function(e)
  {
	  wx.makePhoneCall({
		  phoneNumber:this.data.number
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
  var that = this;
    this.onLoad(); //重新加载onLoad()
	  setTimeout(function () {
	      // 不加这个方法真机下拉会一直处于刷新状态，无法复位
	      wx.stopPullDownRefresh()
	    }, 500)
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