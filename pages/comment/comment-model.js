import{Base}from '../../utils/Base.js';
class Comment extends Base
{
	constructor() {
	    super();
	}
	//获取帖子详情
	commentDetail(id,callback)
	{
		var params= {
			url:'commentdetail/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	//获取帖子的回复
	getReplay(id,callback)
	{
		var params= {
			url:'getreplay/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	//发布回复
	rePlay(para,id,callback)
	{
		var params= {
			type:'Post',
			data:para,
			url:'replay/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	checekUser(callback)
		{
			var params={
				url:'checkuser',
				sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
		}
}
export{Comment};