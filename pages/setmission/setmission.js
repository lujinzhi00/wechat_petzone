// pages/setmission/setmission.js
import{SetMission} from 'setmission-model.js';
var setmission = new SetMission();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	pay:'',
	description:'',
	title:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
			this._loadData();
  },
 _loadData:function(callback)
 {
	 var that =this;
 },
 title1:function(e)
 {
	 this.setData({
		 title:e.detail.value
	 })
 },
 des:function(e)
 {
	
	 this.setData({
		 description:e.detail.value
	 })
 },
 pay1:function(e)
 {
	 this.setData({
		 pay:e.detail.value
	 })
 },
 onGo:function(e)
 {
	 var that =this;
	var da={
		title:this.data.title,
		pay:this.data.pay,
		description:this.data.description
	 };
	 setmission.pullMissiondata(da,(data)=>{ 
		 if(data.code =='201')
		 {
			 wx.showToast({
				 title:'发布成功!',
				 image:'../../icons/success.png'
			 });
			 that.onLoad()
			 setTimeout(function(){
				 var pages = getCurrentPages();
				  if (pages.length > 1) {
				 	 //上一个页面实例对象
				 	var prePage = pages[pages.length - 2];
				 	//调用上一个页面的方法
				 	prePage.onLoad()
				 }
				 wx.navigateBack()
			 },800);
		 }else
		 {
			 if(data.error_code='400001')
			 {
				 wx.showToast({
					 title:'请检查数据',
					 image:'../../icons/fail.png'
				 })
			 }else
			 {
				 wx.showToast({
				 				 title:'请检查输入',
				 				 image:'../../icons/fail.png'
				 });
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