// pages/serv/serv.js
import{Serv} from 'serv-model.js';
var serv = new Serv();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	    var id =options.id;
		this.data.id=id;
		this._loadData();
  },
	_loadData:function(callback)
	{
		var that = this;
		serv.getServDetail(this.data.id,(data)=>{
			that.setData({
				servDetail:data
			})
			callback&&callback(data);
		});
		
	},
	onOrderTap:function(event)
	{
		serv.checekUser((res)=>{
			if(res.error_code=='60000')
			{
				wx.showToast({
					title:res.msg,
					image:'../../icons/fail.png'
				})
				setTimeout(()=>{
					wx.navigateTo({
						url:'../mineinfo/mineinfo'
					})
				},800)
			}else
			{
				var id =serv.getDataSet(event,'id');
				wx.navigateTo({
					url:'../servorder/servorder?id='+id
				})
			}
			
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