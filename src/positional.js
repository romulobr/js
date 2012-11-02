var positional = positional || {};
var movable = movable || {};

positional.original={};
positional.original.x=0;
positional.original.y=0;

movable.original={}
movable.original.direction=0;
movable.original.speed=0;

positional.makeItPositional = function(worldObject){
	worldObject.addCharacteristicProperties("positional",positional.original);
}

movable.makeItMoveable = function(worldObject){
	positional.makeItPositional(worldObject);
	worldObject.addCharacteristicProperties("movable",movable.original);
}