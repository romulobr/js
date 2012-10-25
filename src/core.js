var core = core || {};

core.log= function(msg) {
	console.log(msg);
}

core.WorldObject = function(){
	function self() {
		this.lastUpdate = 0;
		this.actions = [];
	};
	//do stuff with prototype here.
	self.prototype.run = function(obj,elapsedTime) {
		_.each(this.actions, function(action) { 
			if(_.isFunction(action)){
				action(obj,elapsedTime);
			}else{
				action.run(action,elapsedTime);
			}
			;});
			this.lastUpdate = this.lastUpdate+elapsedTime;
	};
	self.prototype.update = function(now){
		var elapsedTime = now - this.lastUpdate;
		this.run(this,elapsedTime);
	}	
	return new self();
}