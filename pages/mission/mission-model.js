import{Base} from '../../utils/Base.js';
class Mission extends Base
{
	constructor() {
	    super();
	}
	getMissionDetail(id,callback)
	{
		var params={
			url:'lookmission/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	getmission(id,callback)
	{
		var params={
			url:'getmission/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
};
export{Mission};