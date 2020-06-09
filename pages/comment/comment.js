import{Comment} from'comment-model.js';
var comment=new Comment();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	replay:'',
	avurl:'../../icons/head.jpg',
	id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var that =this;
		this.data.id = options.id;
		wx.setStorageSync('keyid',options.id);
		comment.commentDetail(that.data.id,(data)=>{
			that.setData({
				com:data,
			})
		});
		comment.getReplay(that.data.id,(data)=>{
				that.setData({
					rep:data
				})
		});
  },
repl:function(e)
{
	this.setData({
		replay:e.detail.value
	});	
},
pullReplay:function(e)
{
	var that = this;
	var id =comment.getDataSet(e,'id');
	var data = {
		content:that.data.replay
	}
	comment.rePlay(data,id,(res)=>{
		if(res.code=='201')
		{
			wx.showToast({
				title:res.msg,
				image:'../../icons/success.png'
			})
			comment.getReplay(that.data.id,(data)=>{
					that.setData({
						rep:data,
						replay:''
					})
			});
		}else
		{
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
			}
			if(res.error_code=='10000')
			{
				wx.showToast({
					title:'内容不能为空',
					image:'../../icons/fail.png'
				})
			}
		}
	})
},
preImg:function(e)
{

	console.log(e)
	let list =[]
	list.push(e.currentTarget.dataset.list)
	let cc = e.currentTarget.dataset.src
	wx.previewImage({
		urls:list,
		current:cc
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
  var id =wx.getStorageSync('keyid');
  console.log(id)
 comment.getReplay(id,(data)=>{
 		that.setData({
 			rep:data
 		})
 });
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