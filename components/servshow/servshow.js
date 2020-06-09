import {Servshow} from 'servshow-model.js'
var servshow = new Servshow();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	list:
	{
		type:Array
	},
	dflag:
	{
		type:Boolean,
		value:true
	},
	cflag:
	{
		type:Boolean,
		value:true
	},
  },

  /**
   * 组件的初始数据
   */
  data: {
	  imgcurrent:'', 
	  flag:true,
	  simg:'../../icons/adown.png',
	  eimg:'../../icons/aup.png',
	  wimg:'../../icons/missionlist.png',
	  bimg:'../../icons/back.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
	  onChange:function(e)
	  {
		  var that =this;
		  var cur =servshow.getDataSet(e,'current');
		  if(this.data.flag)
		  {
			  this.setData({
				  flag:false,
				  imgcurrent:cur,
				  
			  })
		  }else
		  {
			  this.setData({
				  flag:true,
				  imgcurrent:cur
			  })
		  }
	  },
	  onCancel:function(e)
	  {	
		  var that =this;
		  var id = servshow.getDataSet(e,'id');
		  wx.showModal({
			  title:'提示',
			  content:'是否取消',
			  success(res)
			  {
				  if(res.confirm)
				  {
					  servshow.authorCancelMission(id,(data)=>{
						  if(data.code='201')
						  {
							  that.myevent()
							  wx.showToast({
								  title:data.msg,
								  image:'../../icons/success.png'
							  })
						  }else
						  {
							  wx.showToast({
							  	 title:'操作有误！',
							  	 image:'../../icons/fail.png'
							  })
						  }
					  })
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
		  var pages = getCurrentPages();
		   if (pages.length > 1) {
		  	 //上一个页面实例对象
		  	var prePage = pages[pages.length - 2];
		  	//调用上一个页面的方法
		  	prePage.onLoad()
		  }
	  },
	  onadel:function(e)
	  {
		  var that =this;
		  var id = servshow.getDataSet(e,'id');
		  wx.showModal({
		  			  title:'提示',
		  			  content:'是否取消',
		  			  success(res)
		  			  {
		  				  if(res.confirm)
		  				  {
		  					  servshow.delAuOrder(id,(data)=>{
		  						  if(data.code='201')
		  						  {
		  							  that.myevent()
		  							  wx.showToast({
		  								  title:data.msg,
		  								  image:'../../icons/success.png'
		  							  })
		  						  }else
		  						  {
		  							  wx.showToast({
		  							  	 title:'操作有误！',
		  							  	 image:'../../icons/fail.png'
		  							  })
		  						  }
		  					  })
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
		  var pages = getCurrentPages();
		   if (pages.length > 1) {
		  	 //上一个页面实例对象
		  	var prePage = pages[pages.length - 2];
		  	//调用上一个页面的方法
		  	prePage.onLoad()
		  }
	  },
	  onrdel:function(e)
	  {
		  var that =this;
		  var id = servshow.getDataSet(e,'id');
		  wx.showModal({
		  			  title:'提示',
		  			  content:'是否取消',
		  			  success(res)
		  			  {
		  				  if(res.confirm)
		  				  {
		  					  servshow.delReOrder(id,(data)=>{
		  						  if(data.code='201')
		  						  {
		  							  that.myevent()
		  							  wx.showToast({
		  								  title:data.msg,
		  								  image:'../../icons/success.png'
		  							  })
		  						  }else
		  						  {
		  							  wx.showToast({
		  							  	 title:'操作有误！',
		  							  	 image:'../../icons/fail.png'
		  							  })
		  						  }
		  					  })
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
		  var pages = getCurrentPages();
		   if (pages.length > 1) {
		  	 //上一个页面实例对象
		  	var prePage = pages[pages.length - 2];
		  	//调用上一个页面的方法
		  	prePage.onLoad()
			}
	  },
	  ondelit:function(e)
	  {
		var that =this;
		var id = servshow.getDataSet(e,'id');
		wx.showModal({
					  title:'提示',
					  content:'是否取消',
					  success(res)
					  {
						  if(res.confirm)
						  {
							  servshow.delMission(id,(data)=>{
								  if(data.code='201')
								  {
									  that.myevent()
									  wx.showToast({
										  title:data.msg,
										  image:'../../icons/success.png'
									  })
								  }else
								  {
									  wx.showToast({
									  	 title:'操作有误！',
									  	 image:'../../icons/fail.png'
									  })
								  }
							  })
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
		var pages = getCurrentPages();
		console.log(pages)
		 if (pages.length > 1) {
			 //上一个页面实例对象
			var prePage = pages[pages.length - 2];
			//调用上一个页面的方法
			prePage.onLoad()
		}
	  },
	  myevent:function()
	  {
		  var value = 123;
		  this.triggerEvent('myevent', value)
	  }
},
})
