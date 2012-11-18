var caradojo = {
	isFloat:function(arg){
		return ((+arg == arg) && ((arg|0) != arg));
	},
	
	formatNumber:function(arg){
		return ((Math.round(arg *100))/100).toString();
	}
}