describe("Positional", function() {
	
	it("World object can become Positional", function() {
		var o = new core.WorldObject();
		expect(_.contains(_.keys(o.characteristics),"positional")).toEqual(false);
		positional.makeItPositional(o);
		expect(_.contains(_.keys(o.characteristics),"positional")).toEqual(true);
	});	

	it("World object can become Moveable", function() {
		var o = new core.WorldObject();
		expect(_.contains(_.keys(o.characteristics),"movable")).toEqual(false);
		expect(_.contains(_.keys(o.characteristics),"positional")).toEqual(false);
		movable.makeItMovable(o);
		expect(_.contains(_.keys(o.characteristics),"movable")).toEqual(true);
		expect(_.contains(_.keys(o.characteristics),"positional")).toEqual(true);
	});
	
	it("Movable moves when object update is called", function() {
		var o = new core.WorldObject();
		spyOn(movable,'move').andCallThrough();
		movable.makeItMovable(o);
		o.update(200);
		expect(movable.move).toHaveBeenCalled();
	});
	
	it("Movable direction is being set.",function(){
		var o = new core.WorldObject();
		movable.makeItMovable(o);		
	});
});