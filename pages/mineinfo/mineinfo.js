// pages/mineinfo/mineinfo.js
import{Minemi} from 'mineinfo-model.js';
var minemi = new Minemi();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	canIUse: wx.canIUse('button.open-type.getUserInfo'),
	isshow:true,
	nickname:'',
	wechat:'',
	tellphone:'',
	extend:'',
	avurl:'../../icons/head.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var that =this;
	  minemi.getuserinfo((data)=>{
		  that.setData({
			 userArr:data
		  })
	  });
  },
nickname1:function(e)
{
	this.setData({
		nickname:e.detail.value,
	})
},
wechat1:function(e)
{
	var han = /^[a-zA-Z0-9_]{0,}$/;
	if(!han.test(e.detail.value))
	{
		wx.showToast({
			title:'微信号有误',
			image:'../../icons/fail.png'
		})
	}else
	{
		this.setData({
			wechat:e.detail.value
		})
	}
},
tellphone1:function(e)
{
	this.setData({
		tellphone:e.detail.value
	})
},
extend1:function(e)
{
	this.setData({
		extend:e.detail.value
	})
},
onGoinfo:function(e)
{
	var that= this;
	var nickname1=e.detail.value.firstname;
	var wechat1=e.detail.value.firstwechat;
	var tellphone1=e.detail.value.firsttellphone;
	var extend1=e.detail.value.firstextend
	var para=
	{
		nickname:this.data.nickname?this.data.nickname:nickname1,
		tellphone:this.data.tellphone?this.data.tellphone:tellphone1,
		wechat:this.data.wechat?this.data.wechat:wechat1,
		extend:this.data.extend?this.data.extend:extend1
	}
	var data= this.data.userArr;
	if(data.nickname==para.nickname&&data.tellphone==para.tellphone&&data.wechat==para.wechat&&data.extend==para.extend)
	{
		wx.showToast({
			title:'请修改内容',
			image:'../../icons/fail.png'
		})
	}else
	{
		minemi.pulluserinfo(para,(data)=>{
			if(data.error_code=='10000')
			{
				wx.showToast({
					title:"请检查输入!",
					image:'../../icons/fail.png'
				})
			}else
			{
				wx.showToast({
					title:'修改成功',
					image:'../../icons/success.png'
				})
				this.onLoad()
			}
		})
		
	}
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