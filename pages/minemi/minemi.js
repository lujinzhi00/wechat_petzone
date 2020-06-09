// pages/minemi/minemi.js
import{Minemi} from 'minemi-model.js';
var minemi = new Minemi();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	tabcurrent:'',
	tabitem:['待审核','发布中','进行中','已完成'],
	tabitem1:['进行中','已完成'],
	itemcurrent:0,
	imgchange:true,
	startimg:'../../icons/adown.png',
	endimg:'../../icons/aup.png',
	imgcurrent:'',
	imgcurrent1:'',
	dheight:50,
	ddheight:48,
	aheight:120,
	aaheight:120,
	itemcurrent1:0,
	confirmitem:false,
	dcheight:50,
	flag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var that =this;
		minemi.getSelfMission((data)=>{
			that.setData({
				selfMission:data
			})
		});
		minemi.getSelfSetMission((data)=>{
			that.setData({
				selfSetMission:data
			})
		});
		minemi.getSelfActMission((data)=>{
			that.setData({
				selfActMission:data
			})
		});
		minemi.finishMission((data)=>{
			that.setData({
				fMission:data
			})
		});
		minemi.lookGetFin((data)=>{
			that.setData({
				gfMission:data
			})
		});
		minemi.lookGetMi((data)=>{
			that.setData({
				gmMission:data
			})
		});
  },
clicktab:function(e)
{
	var current =minemi.getDataSet(e,'current')
	this.setData({
		tabcurrent:current
	})
},
clickitem:function(e)
{
	var cur =minemi.getDataSet(e,'current');
	this.setData({
		itemcurrent:cur
	})
},
clickitem1:function(e)
{
	var cur =minemi.getDataSet(e,'current');
	this.setData({
		itemcurrent1:cur
	})
},
switchTab:function(e)
{

	this.setData({
		itemcurrent:e.detail.current
	})
	if(this.data.itemcurrent == 4)
	{
		this.setData({
			tabcurrent:1
		})
	}
},
switchTab1:function(e)
{
	this.setData({
		itemcurrent1:e.detail.current
	})
},
onChange:function(e)
{
	var that =this;
	var current =minemi.getDataSet(e,'current');
	if(this.data.imgchange)
	{
		this.setData({
			imgchange:false,
			imgcurrent:current,
			dheight:120,
			aheight:190,
			confirmitem:true
		})
	}else
	{
		this.setData({
			imgchange:true,
			imgcurrent:current,
			dheight:48,
			aheight:120,
			confirmitem:false
		})
	}
},
onChange1:function(e)
{
	var that =this;
	var current =minemi.getDataSet(e,'current');
	if(this.data.imgchange)
	{
		this.setData({
			imgchange:false,
			imgcurrent:current,
			ddheight:320,
			aaheight:390,
			confirmitem:true,
			dcheight:200
		})
	}else
	{
		this.setData({
			imgchange:true,
			imgcurrent:current,
			ddheight:48,
			aaheight:120,
			confirmitem:false
		})
	}
},
onCh:function(e)
{
	var current =minemi.getDataSet(e,'current');
	if(this.data.imgchange)
	{
		this.setData({
			imgchange:false,
			imgcurrent1:current,
			dheight:120,
			aheight:190
		})
	}else
	{
		this.setData({
			imgchange:true,
			imgcurrent1:current,
			dheight:48,
			aheight:120
		})
	}
},
onCh1:function(e)
{
	var current =minemi.getDataSet(e,'current');
	if(this.data.imgchange)
	{
		this.setData({
			imgchange:false,
			imgcurrent1:current,
			dheight:320,
			aheight:390,
			dcheight:200
		})
	}else
	{
		this.setData({
			imgchange:true,
			imgcurrent1:current,
			dheight:48,
			aheight:120,
		})
	}
},
cancelMi:function(e)
{
	var id =minemi.getDataSet(e,'id');
	minemi.authorCancelMission(id,data=>{
		if(data.errorCode==0)
		{
			wx.showToast({
				title:'取消成功！',
				image:'../../icons/success.png'
			});
			setTimeout(function(){
				wx.navigateBack({
					url:'../mine/mine'
					
				})
			},800);
		}
	})
},
onConfirm:function(e)
{
	var id = minemi.getDataSet(e,'id');
	minemi.finishSelfSetMission(id,(data)=>{
		if(data.errorCode==0)
		{
			wx.showToast({
				title:'操作成功！',
				image:'../../icons/success.png'
			});
			setTimeout(function(){
				wx.navigateBack({
					url:'../mine/mine'
					
				})
			},800);
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