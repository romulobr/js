function log(msg) {
	console.log(msg);
}

var core = core || {};

core.addAttributes = 
function (o,map){
 _.each(map, function (v, k) {
   o[k] = v;
 });
};


core.WorldObject = function(){
	function self() {
		this.lastUpdate = 0;
		this.actions = [];
	};
	//do stuff with prototype here.
	self.prototype.run = function(elapsedTime) {
		_.each(this.actions, function(action) { action();});
	};
	self.prototype.update = function(now){
		var elapsedTime = now - this.lastUpdate;
		this.run(elapsedTime);
	}	
	return new self();
}

var o1 = new core.WorldObject();
var o2 = new core.WorldObject();
var o3 = new core.WorldObject();

o1.actions.push(function(){log('action of o1 ran.');});
o2.actions.push(function(){log('action of o2 ran.');});
o3.actions.push(function(){log('action of o3 ran.');});

o1.update();
//o2.update();
o3.update();