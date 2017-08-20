var doIt = function (i , callback){
	if ( i % 2 == 0){
		callback(null, i * 2);
	}
	else {
		callback(null, i * 3);
	}
}
module.exports.doIt = doIt;