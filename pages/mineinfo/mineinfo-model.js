import{Base}from '../../utils/Base.js';
class Minemi extends Base
{
	constructor() {
	    super();
	}
	pulluserinfo(parm,callback)
	{
		var	params={
			url:'adduserinfo',
			data:parm,
			type:'Post',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	getuserinfo(callback)
	{
		var params={
			url:'getuserinfo',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
}
export{Minemi};