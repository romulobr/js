var positional = positional || {};
var movable = movable || {};

positional.original={}
positional.original.x=0;
positional.original.y=0;

movable.original={};
//speed shall be in pixel per second
movable.original.speed={x:0,y:0};

movable.original.setDirection = function (position){
//	this.
}

positional.makeItPositional = function(worldObject){
	worldObject.addCharacteristicProperties("positional",positional.original);
	worldObject.characteristics.positional = {x:0,y:0};	
}

movable.makeItMovable = function(worldObject){
	positional.makeItPositional(worldObject);	
	worldObject.addCharacteristicProperties("movable",movable.original);
	worldObject.characteristics.movable.speed = {x:0,y:0};
	worldObject.actions.push(movable.move);
}

movable.move = function(movable,elapsedTime){
	movable.characteristics.positional.x += movable.characteristics.movable.speed.x*(elapsedTime/1000);
	movable.characteristics.positional.y += movable.characteristics.movable.speed.y*(elapsedTime/1000);
}
