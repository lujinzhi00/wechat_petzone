import{Base} from '../../utils/Base.js';
class Act extends Base{
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
			url:'actdel/'+id,
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
};
export{Act};