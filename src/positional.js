var positional = positional || {};
var movable = movable || {};

positional.original={};
positional.original.x=0;
positional.original.y=0;

movable.original={};
movable.original.direction=0.0;
movable.original.speed=0.0;

movable.move = function(movable,elapsedTime){
	core.log("todo: moving movable object");
}


positional.makeItPositional = function(worldObject){
	worldObject.addCharacteristicProperties("positional",positional.original);
}

movable.makeItMovable = function(worldObject){
	positional.makeItPositional(worldObject);
	worldObject.addCharacteristicProperties("movable",movable.original);
	worldObject.actions.push(movable.move);
}
