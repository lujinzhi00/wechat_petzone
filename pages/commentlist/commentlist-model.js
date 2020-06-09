import{Base} from '../../utils/Base.js';
class Commentlist extends Base
{
	constructor() {
	    super();
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
	allComment(callback)
	{
		var params={
			url:'allcommentlist',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	}
	bestComment(callback)
	{
		var params={
			url:'bestcomment',
			sCallback:function(data)
			{
				callback&&callback(data);
			}
		};
		this.request(params);
	};
	//获取帖子内容
}
export{Commentlist};