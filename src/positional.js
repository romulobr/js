var positional = positional || {};
var movable = movable || {};

positional.original={}
positional.original.position=$V([0,0]);

movable.original={};
movable.original.speed=$V([0,0]);

positional.makeItPositional = function(worldObject){
	worldObject.addCharacteristicProperties("positional",positional.original);
}

movable.makeItMovable = function(worldObject){
	positional.makeItPositional(worldObject);
	worldObject.addCharacteristicProperties("movable",movable.original);
	worldObject.actions.push(movable.move);
}

movable.move = function(movable,elapsedTime){
	core.log(movable.position);
}