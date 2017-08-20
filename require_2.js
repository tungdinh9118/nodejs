var one = require('./require_1');
 for ( i = 0; i <= 100; i++ ){
 	one.doIt(i, function(err , result){
 		console.log( i + "=>" + result);
 	});
 }
 console.log("finish");