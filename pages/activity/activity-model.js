import{Base} from '../../utils/Base.js';
class Activity extends Base{
	constructor() {
	    super();
	}
	getActivityDetail(id,callback)
	{
		var params ={
			url:'getComplexOne/'+id,
			sCallback:function(data)
					{
						callback&&callback(data);
					}
				};
				this.request(params);
	}
	getActivityGo(id,callback)
	{
		var params = {
			url:'actsignup/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
			
};
export{Activity};