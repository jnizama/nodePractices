
var Car = {};
Car.Drive = function(){
    console.log("El carro es conducido" );
}
Car.Honk = function(){
    console.log("El carro ha sonado" );
}

exports.myFunction = function(){
    return "jorge nizama";
}
module.exports = Car;
//exports.myFunction = myFunction;