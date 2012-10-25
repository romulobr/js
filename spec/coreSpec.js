describe("Core", function() {

  it("Time of last update should be updated", function() {
	var o = new core.WorldObject();
	o.actions.push(function(obj,elapsedTime){});
    expect(o.lastUpdate).toEqual(0);
	o.update(300);
    expect(o.lastUpdate).toEqual(300);
	o.update(400);
    expect(o.lastUpdate).toEqual(400);	
  });

  it("Action function must be called with proper arguments", function() {
	var o = new core.WorldObject();
	o.actions.push(function(obj,elapsedTime){});
	spyOn(o,'run');
	o.update(100);
	expect(o.run).toHaveBeenCalledWith(o,100);
  });

  it("Action function must be called on deeper objects with right parameters", function() {
	var o = new core.WorldObject();
	var o2 = new core.WorldObject();			
	o.actions.push(function(obj,elapsedTime){});
	//o2.actions.push(function(obj,elapsedTime){});	
	o2.actions.push(o);		
	spyOn(o,'run');
	o2.update(100);
	expect(o.run).toHaveBeenCalledWith(o,100);
  });
});