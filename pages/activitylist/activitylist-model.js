import{Base} from '../../utils/Base.js';
class Activitylist extends Base
{
	constructor() {
	    super();
	}
	getActivityList(callback)
	{
		var params = {
			url:'activity/',
			sCallback:function(data)
			{
					callback&&callback(data);
			}
		};
		this.request(params);
	}
}
export{Activitylist};