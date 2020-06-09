import{Base} from '../../utils/Base.js';
class SetComment extends Base
{
	constructor() {
	    super();
	}
	setComm(param,callback)
	{
		var params ={
			url:'setcomment/',
			type:'post',
			data:param,
			sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
	}
}
export{SetComment};