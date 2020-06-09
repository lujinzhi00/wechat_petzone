import {Config} from '../utils/Config.js';
import { Token } from 'token.js';
class Base{
  constructor()
  { 
    this.baseUrl = Config.restUrl;
 

  }
  request(params)
  {
    var url =this.baseUrl +params.url;
    if(!params.type)
    {
      params.type='GET';
	  params.header=
	  {
		  'content-type':'appliacation/json',
		  'token':wx.getStorageSync('token')
	  }
    }else
	{
	  params.header=
	  {
		  "Content-Type": "application/x-www-form-urlencoded",
		  'token':wx.getStorageSync('token')
	  }
	}
    wx.request({
      url: url,
      data: params.data,
      header:params.header,
      method: params.type,
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
      // console.log(res);
       params.sCallback&&params.sCallback(res.data);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
  /*获得元素上的绑定的值*/
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  };
  _refetch(param) {
    var token = new Token();
    token.getTokenFromServer((token) => {
      this.request(param, true);
    });
  };
  getDateTime(year,month,day,hour)
  {
	  var time = parseInt(year.substring(0,year.length-1))+'-'
	  +parseInt(month.substring(0,month.length-1))+'-'
	  +parseInt(day.substring(0,day.length-1))+' '
	  +parseInt(hour.substring(0,hour.length-1))+':00:00'
	  return time;
  };
}
export{Base};