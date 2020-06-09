import {Mineserv} from 'mineserv-model.js';
var mineserv = new Mineserv();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	itemcurrent:0,
	tab:['进行中','已完成'],
	cdn:'https://nethoa.xyz/uploads/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var that =this;
		mineserv.getPreOrder((data)=>{
			var len = data.length;
			this.setData({
				preOrder:data,
				length:len
			})
		})
		mineserv.getFinOrder((data)=>{
			var length = data.length;
			this.setData({
				finOrder:data,
				len:length
			})
		})
  },
  switchTab:function(e)
  {
  
  	this.setData({
  		itemcurrent:e.detail.current
  	})
  },
  choose:function(e)
  {
	var cur = mineserv.getDataSet(e,'current');
	this.setData({
		itemcurrent:cur
	})
  },
  cancelOrder:function(e)
  {
	  var that = this;
	  var id =mineserv.getDataSet(e,'id');
	  mineserv.cancelOrder(id,(data)=>{
		  wx.showModal({
			  title:'提示',
			  content:'是否取消',
			  success(res)
			  {
				  if(res.confirm)
				  {
					  if(data.code=='201')
					  {
					  			  that.onLoad();
					  			  wx.showToast({
					  				  title:data.msg,
					  				  image:'../../icons/success.png'
					  			  })
								  var pages = getCurrentPages();
								   if (pages.length > 1) {
								  	 //上一个页面实例对象
								  	var prePage = pages[pages.length - 2];
								  	//调用上一个页面的方法
								  	prePage.onLoad()
								  }
					  }else
					  {
					  			  wx.showToast({
					  				  title:'未知错误！',
					  				  image:'../../icons/fail.png'
					  			  })
					  }
				  }else if(res.cancel)
				  {
					  
				  }else
				  {
					  wx.showToast({
					  		 title:'错误请求！',
					  		 image:'../../icons/fail.png'
					  })
				  }
			  }
						})

	  })
  },
  delOrder:function(e)
  {
	  var that = this;
	  var id =mineserv.getDataSet(e,'id');
	  mineserv.delOrder(id,(data)=>{
		  wx.showModal({
		  			  title:'提示',
		  			  content:'是否取消',
		  			  success(res)
		  			  {
		  				  if(res.confirm)
		  				  {
		  					  if(data.code=='201')
		  					  {
		  					  			  that.onLoad();
		  					  			  wx.showToast({
		  					  				  title:data.msg,
		  					  				  image:'../../icons/success.png'
		  					  			  })
		  					  }else
		  					  {
		  					  			  wx.showToast({
		  					  				  title:'未知错误！',
		  					  				  image:'../../icons/fail.png'
		  					  			  })
		  					  }
		  				  }else if(res.cancel)
		  				  {
		  					  
		  				  }else
		  				  {
		  					  wx.showToast({
		  					  		 title:'错误请求！',
		  					  		 image:'../../icons/fail.png'
		  					  })
		  				  }
		  			  }
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