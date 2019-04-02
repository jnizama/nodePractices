var exportFuncions = require('./exportFuncions.js')
var log = require('./log.js')
var errors = require('./errors')

//var myCar = exportFuncions.Drive();
//myCar.Drive();
exportFuncions.Drive();
log.Msg = "nizama";
log.Info();

//var str = exportFuncions.myFunction();
console.log(log.Msg);

var error = errors.crea();
console.log(error.message);