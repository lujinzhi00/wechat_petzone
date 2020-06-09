import {Base} from '../../utils/Base.js'
class Servshow extends Base
{
	constructor() {
	    super();
	}
	//发布人取消任务
	authorCancelMission(id,callback)
	{
		var params={
			url:'acmission/'+id,
			sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
	}
	//接收人取消任务
	cancelMission(id,callback)
	{
		var params={
			url:'cancelmission/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	//发布人删除任务
	delAuOrder(id,callback)
	{
		var params={
			url:'delauorder/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	//接受人删除任务
	delReOrder(id,callback)
	{
		var params={
			url:'delreorder/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	//完全删除任务
	delMission(id,callback)
	{
		var params={
			url:'delmi/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
}
export{Servshow};