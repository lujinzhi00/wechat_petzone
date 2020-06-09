import{SetComment} from 'setcomment-model.js';
var setcomment = new SetComment();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	type:'',
	description:'',
	title:'',
	pullUrl:'',
	choose:[
		{
			id:1,
			name:'求助帖子'
		},
		{
			id:2,
			name:'交流帖子'
		}
	],
	image:[]
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
 onGo:function(e)
 {
	 var that =this;
	var da={
		title:this.data.title,
		type:this.data.type,
		description:this.data.description,
		imgurl:this.data.pullUrl
	 };
	 setcomment.setComm(da,(data)=>{ 
		 if(data.code =='201')
		 {
			 wx.showToast({
				 title:'发布成功!',
				 image:'../../icons/success.png'
			 });
			 setTimeout(function(){
				 var pages = getCurrentPages();
				  if (pages.length > 1) {
				 	 //上一个页面实例对象
				 	var prePage = pages[pages.length - 2];
				 	//调用上一个页面的方法
				 	prePage.onLoad()
				 }
				 wx.navigateBack({
					 url:'../commentlist/commentlist'
				 })
			 },800)
			 that.onLoad()
		 }else
		 {
			 wx.showToast({
				 title:'请检查输入',
				 image:'../../icons/fail.png'
			 })
		 }
	 });

 },
radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
	this.setData({
		type:e.detail.value
	})
  },
 uploadImg: function() {
       var that = this;
       wx.chooseImage({ //从本地相册选择图片或使用相机拍照
         count: 1, // 默认9
         sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
         sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    	    success: function(res) {
     		  console.log(res)
     		  that.setData({
         		image: res.tempFilePaths  //前台显示
     		  })
           // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
       	var tempFilePaths = res.tempFilePaths
       	wx.uploadFile({
         url: 'https://nethoa.xyz/index.php/api/v1/upload', //这里需要写你自己url
         filePath: tempFilePaths[0],
         name: 'file',
         success: function(res) {
           //打印url)
		   console.log(res)
		   let url = JSON.parse(res.data)
		   that.setData({
			   pullUrl:url.data
		   })
         }
       })
     }
   })
 },
 delectImg:function(e){
      var image = this.data.image;
      image.splice(e.currentTarget.dataset.num,1);
      this.setData({
        image: image,
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