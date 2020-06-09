import {Base} from '../../utils/Base.js'
class Servonline extends Base
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
	//确认完成任务
	finishSelfSetMission(id,callback)
	{
		var params={
			url:'finishselfsetmission/'+id,
			sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
	}	
}
export{Servonline};