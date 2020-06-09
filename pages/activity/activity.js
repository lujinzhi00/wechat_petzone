// pages/activity/activity.js
import{Activity} from 'activity-model.js';
var activity = new Activity();
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
			
			this.data.id=options.id;
			this._loadData();
  },
   _loadData:function(callback)
   {
	   var that =this;
	   activity.getActivityDetail(this.data.id,(data)=>{
	   	that.setData({
	   		actArr:data
	   	});
	   	 callback&&callback(data);
	   });
   },
   onActivityTap:function(event)
   {	var that =this;
	   var id =activity.getDataSet(event,'id');
	   activity.getActivityGo(id,(data)=>{
		   that.setData({
			   newsArr:data
		   });
		   console.log(this.data.newsArr);
		   if(this.data.newsArr.code == '201')
		   {
			   wx.showToast({
			   				   title:this.data.newsArr.msg,
			   				   image:'../../icons/success.png'
			   });
			   setTimeout(()=>{
			   			   wx.navigateBack({
			   			   	url:'../activitylist/activitylist'
			   			   })
			   },800)
		   }else
		   {
			   wx.showToast({
			   		   	title:'无法报名！',
			   			image:'../../icons/fail.png'
			   });
			   if(this.data.newsArr.error_code == '60000')
			   {
			   					  setTimeout(()=>{
			   						  wx.navigateTo({
			   						  	url:'../mineinfo/mineinfo'
			   						  })
			   					  },800)
			   }	 
		   }
	   });
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