import{Base} from '../../utils/Base.js'
class Mineserv extends Base
{
	constructor() {
	    super();
	}
	getPreOrder(callback)
	{
		var params={
			url:'getPreOrder',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	getFinOrder(callback)
	{
		var params={
			url:'getfinorder',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	cancelOrder(id,callback)
	{
		var params={
			url:'cancel/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	delOrder(id,callback)
	{
		var params={
			url:'delorder/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
}
export{Mineserv};