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

  it("Action function should be called with proper arguments", function() {
	var o = new core.WorldObject();
	o.actions.push(function(obj,elapsedTime){});
	spyOn(o,'run');
	o.update(100);
	expect(o.run).toHaveBeenCalledWith(o,100);
  });

  it("Action function should be called on deeper objects with right parameters", function() {
	var o = new core.WorldObject();
	var o2 = new core.WorldObject();			
	o.actions.push(function(obj,elapsedTime){});
	//o2.actions.push(function(obj,elapsedTime){});	
	o2.actions.push(o);		
	spyOn(o,'run');
	o2.update(100);
	expect(o.run).toHaveBeenCalledWith(o,100);
  });

	it("world object should have characteristic or not", function() {
		var o = new core.WorldObject();
		expect(o.hasCharacteristic("chara")).toEqual(false);
		core.log(JSON.stringify(o));
		o.characteristics["chara"]=0;
		core.log(JSON.stringify(o));		
		expect(o.hasCharacteristic("chara")).toEqual(true);
	});

	it("should add characteristic with properties on world object", function() {
		var o = new core.WorldObject();
		var properties={color:"black",size:10};
		expect(_.contains(_.keys(o.characteristics),"newStuff")).toEqual(false);
		o.addCharacteristicProperties("newStuff", properties);
		expect(_.contains(_.keys(o.characteristics),"newStuff")).toEqual(true);
	});
	
	
});