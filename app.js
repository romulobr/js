var mynamespace = mynamespace || {};

mynamespace.obj = {};

mynamespace.addAttributes = 
function (o,map){
 _.each(map, function (k, v) {
   o[k] = v;
 });
};