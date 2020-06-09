import{Base} from '../../utils/Base.js';
class Servlist extends Base
{
	constructor() {
	    super();
	}
	getServList(callback)
	{
		var params={
			url:'Serv/',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
}
export {Servlist};