import {Base} from '../../utils/Base.js';
class ServOrder extends Base
{
	constructor() {
	    super();
	}
	getUserData(callback)
	{
		var params = {
			url:'getuserinfo',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	getServData(id,callback)
	{
		var params={
			url:'Srecent/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	pullOrder(id,param,callback)
	{
		var params={
			url:'preOrder/'+id,
			type:'Post',
			data:param,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
};
export{ServOrder};