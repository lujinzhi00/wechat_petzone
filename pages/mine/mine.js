// pages/mine/mine.js
import {Mine} from 'mine-model.js';
var mine = new Mine();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	isshow:true,
	iscomment:true,
	showurl:'../../icons/righta.png',
	show:'../../icons/righta.png',
	downurl:'../../icons/downa.png',
	comurl:'../../icons/com.png',
	favurl:'../../icons/favour.png',
	avurl:'../../icons/head.jpg',
	nickname:'>_>'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var that =this;
	    // 查看是否授权
	      wx.getSetting({
	        success: function(res){
	          if (res.authSetting['scope.userInfo']) {
	            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
	            wx.getUserInfo({
	              success: function(res) {
					that.setData({
						avurl:res.userInfo.avatarUrl,
						nickname:res.userInfo.nickName
					})
	              }
	            })
	          }
	        }
	      })
			mine.getUserAct((data)=>{
				that.setData({
					actArr:data
				})
			});
			mine.getUserinfo((data)=>{
				that.setData({
					userInfo:data
				})
			});
			mine.lookComment((data)=>{
				that.setData({
					commentArr:data
				})
			})
			
  },
  onActTap:function(event)
  {
	  var id =mine.getDataSet(event,'id');
	  wx.navigateTo({
		  url:'../actcheck/actcheck?id='+id
	  })
  },
  onActTap1:function(event)
  {
  	  var id =mine.getDataSet(event,'id');
  	  wx.navigateTo({
  		  url:'../comment/comment?id='+id
  	  })
  },
  onGomineinfo:function(e)
  {
	  wx.navigateTo({
		  url:'../mineinfo/mineinfo'
	  })
  },
  onGominemission:function(e)
  {
	  wx.navigateTo({
		  url:'../minemi/minemi'
	  })
  },
  onGomineserv:function(e)
  {
	  wx.navigateTo({
		  url:'../mineserv/mineserv'
	  })
  },
 onChange:function(event)
{
		if(this.data.isshow)
		{
			this.setData({
				isshow:false
			});
		}else
		{
			this.setData({
				isshow:true
			});
		}
		this.onLoad()
},
onChange1:function(e)
{
	if(this.data.iscomment)
	{
		this.setData({
			iscomment:false
		});
	}else
	{
		this.setData({
			iscomment:true
		});
	}
	this.onLoad()
},
delCom:function(e)
{
	var that =this;
	var id =mine.getDataSet(e,'id');
	wx.showModal({
		title:'提示',
		content:'是否要删除？',
		success(res){
			if(res.confirm)
			{
				mine.delCom(id,(res)=>{
					if(res.code=='201')
					{
						that.onLoad()
						wx.showToast({
							title:'删除成功！',
							image:'../../icons/success.png'
						})
					}
				})
			}else if(res.cancel)
			{
				
			}else
			{
				 wx.showLoading({
				     title: '系统异常',
				      fail
				  })
			}
		}

	})
},
bindGetUserInfo:function(e)
{
	var para={
		avurl:e.detail.userInfo.avatarUrl
	}
	mine.pullUser(para,(data)=>{})
	this.onLoad()
	wx.showToast({
		title:'同步成功'
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
  this.onLoad()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
	this.onLoad()
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