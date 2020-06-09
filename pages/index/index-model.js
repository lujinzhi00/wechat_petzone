import {Base} from '../../utils/Base.js';
class Index extends Base
{
  constructor()
  {
    super();
  }
  //获取导航栏信息
  getBannerData(callback)
  {
    var that = this;
    var params ={
      url:'banner',
      sCallback:function(res)
      {
        res = res.items;
        callback&&callback(res);
      }
    }
    this.request(params);
  }
  //获取首页服务信息
  getNewServData(callback)
  {
    var params ={
      url:'Srecent',
      sCallback:function(res)
      {
        callback && callback(res);
      } 
    }
    this.request(params);
  }
  //获取最新活动信息
  getNewAcitivityData(callback)
  {
	  var params = {
		  url:'getrecent',
		  sCallback:function(res)
		  {
			  callback&&callback(res);
		  }
	  }
	  this.request(params);
  }
}
export {Index};