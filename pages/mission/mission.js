// pages/mission/mission.js
import {Mission} from 'mission-model.js';
var mission =new Mission();
Page({
	
  /**
   * 页面的初始数据
   */
  data: {
		theight:'400rpx',
		height:'130rpx',
		flag:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
	  var id =option.id;
	  this.data.id=id;
	  this._loadData();
  },
  _loadData:function(callback)
  {
	  var that =this;
	  mission.getMissionDetail(this.data.id,(data)=>{
		  that.setData({
			  missionInfo:data
		  });
		  callback&&callback();
	  });
  },
  onchangetip:function(event)
  {     var that = this;
		if(this.data.flag)
		{
			this.setData({
			    flag:false,
				warnheight:that.data.theight
			});
		}else
		{
			this.setData({
				flag:true,
				warnheight:that.data.height
			});
		}
  },
  ongetmission:function(event)
  {	  var that =this;
	  var id =mission.getDataSet(event,'id');
	  mission.getmission(id,(data)=>{
		  that.setData({
			  sinfo:data
		  });
      if(this.data.sinfo.code == '201')
      {
        wx.showToast({
          title: this.data.sinfo.msg,
          image:'../../icons/success.png'
        })
		var pages = getCurrentPages();
		 if (pages.length > 1) {
			 //上一个页面实例对象
			var prePage = pages[pages.length - 2];
			//调用上一个页面的方法
			prePage.onLoad()
		}
		var time =setTimeout(function(){
				wx.navigateBack()	
		},800)
      }else
      {	 
        wx.showToast({
          title: this.data.sinfo.msg,
          image:'../../icons/fail.png'
        })
        if(this.data.sinfo.error_code == '60000')
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