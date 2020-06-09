import{Base} from '../../utils/Base.js';
class MissionList extends Base
{
	constructor() {
	    super();
	}
	getMissionList(or,callback)
	{
		var params = {
			url:'allmission/'+or,
			sCallback:function(res)
			{
				callback&&callback(res);
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
};
export{MissionList};