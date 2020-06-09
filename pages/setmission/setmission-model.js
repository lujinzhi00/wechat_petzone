import{Base} from '../../utils/Base.js';
class SetMission extends Base
{
	constructor() {
	    super();
	}
	pullMissiondata(param,callback)
	{
		var params ={
			url:'setmission/',
			type:'post',
			data:param,
			sCallback:function(data)
				{
					callback&&callback(data);
				}
			};
			this.request(params);
		}
};
export{SetMission};