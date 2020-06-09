import {Base} from '../../utils/Base.js';
class Mine extends Base
{
	constructor() {
	    super();
	}
	getUserAct(callback)
	{
		var param={
			url:'uactinfo',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(param);
	}
	getUserinfo(callback)
	{
		var params={
			url:'getuserinfo',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	lookComment(callback)
	{
		var params={
			url:'lookcomment',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	delCom(id,callback)
	{
		var params={
			url:'delcomment/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	pullUser(param,callback)
	{
		var params ={
			url:'pulluser',
			type:'post',
			data:param,
			sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
	}
}
export {Mine};