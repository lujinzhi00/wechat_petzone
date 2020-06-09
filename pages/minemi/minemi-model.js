import{Base}from '../../utils/Base.js';
class Minemi extends Base
{
	constructor() {
	    super();
	}
	//获取自己在审核的任务列表
	getSelfMission(callback)
	{
		var params={
			url:'lookselfmission',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	};
	//查看自己审核通过发布的任务
	getSelfSetMission(callback)
	{
		var params={
			url:'lookselfsetmission',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	};
	//查看进行中的任务
	getSelfActMission(callback)
	{
		var params={
			url:'lookselfactmission',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	};
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
	//发布人查看自己完成的任务
	finishMission(callback)
	{
		var params={
			url:'lookfin',
			sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
	}
	//接收人查看接收的任务
	lookGetMi(callback)
	{
		var params={
			url:'lookgetmission',
			sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
	}
	//接收人查看完成任务
	lookGetFin(callback)
	{
		var params={
			url:'lookauget',
			sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
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
	//发布人确认完成任务
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
	//发布人获取联系方式
	auLookContact(id,callback)
	{
		var params={
			url:'aulookcontact/'+id,
			sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
	}
}
export {Minemi};