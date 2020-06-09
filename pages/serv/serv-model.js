import{Base} from '../../utils/Base.js';
class Serv extends Base
{
	constructor() {
	    super();
	}
	getServDetail(id,callback)
	{
		var params ={
			url:'Srecent/'+id,
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
export{Serv};