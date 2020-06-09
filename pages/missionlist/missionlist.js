import{MissionList} from 'missionlist-model.js';
var missionlist = new MissionList();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  or:2,
	  changeList:['信誉','报酬','发布时间'],
	  changeid:3,
	  flag:true,
	  fimg:'../../icons/downdown.png',
	  simg:'../../icons/upup.png',
	  showtip:'综合',
	  selectlist:['综合','报酬降序','报酬升序'],
	  selectflag:true,
	  colorflag:0,
	  primarytip:'综合',
	  colorid:3
	  
	  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this._loadData();
  },
  _loadData(callback)
  {
	  var that =this;
	  missionlist.getMissionList(that.data.or,(data)=>{
		  that.setData({
			  missionArr:data
		  });
	  });
  },
  onMissionDetail:function(event)
  {
	  var id =missionlist.getDataSet(event,'id');
	  wx.navigateTo({
		  url:'../mission/mission?id='+id
	  });
  },
  onCheck:function(e)
  {
	missionlist.checekUser((res)=>{
			 if(res.error_code=='60000')
			 {
				 wx.showToast({
				 		   	title:res.msg,
				 			image:'../../icons/fail.png'
				 });
				 setTimeout(()=>{
				 	 wx.navigateTo({
				 	url:'../mineinfo/mineinfo'
				 	})
				 },800)
			 }else
			 {
				 wx.navigateTo({
					 url:'../setmission/setmission'
				 })
			 }
	})  
  },
  change:function(e)
  {
	 this.setData({
		 flag:!this.data.flag,
		 selectflag:!this.data.selectflag
	 })
  },
  select:function(e)
  {
	  var that =this;
	  var name = missionlist.getDataSet(e,'name');
	  var id = missionlist.getDataSet(e,'id');
	  this.setData({
		  showtip:name,
		  selectflag:true,
		  flag:true,
		  colorflag:1,
		  colorid:id
	  })
	 missionlist.getMissionList(id,(data)=>{
	 		  that.setData({
	 			  missionArr:data
	 		  });
	 });
  },
  selectRe:function(e)
  {
	   var that =this;
	  this.setData({
		  showtip:this.data.primarytip,
		  selectflag:true,
		  flag:true,
		  colorflag:2,
		  colorid:3
	  })
	  missionlist.getMissionList(3,(data)=>{
	  		  that.setData({
	  			  missionArr:data
	  		  });
	  });
  },
  selectTi:function(e)
  {
	   var that =this;
  	  this.setData({
  		  showtip:this.data.primarytip,
  		  selectflag:true,
  		  flag:true,
  		  colorflag:3,
		  colorid:3
  	  })
	  missionlist.getMissionList(4,(data)=>{
	  		  that.setData({
	  			  missionArr:data
	  		  });
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