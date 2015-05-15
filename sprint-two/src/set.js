var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  for (var key in this._storage) {
    if(this._storage[key] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  delete this._storage[item];
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// var Set = function(){
//   var set = Object.create(setPrototype);
//   set._storage = [];
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item){
//   if (!(this.contains(item))){
//     this._storage.push(item);
//   }
// };

// setPrototype.contains = function(item){
//   if (this._storage.indexOf(item)>-1) {
//     return true;
//   }
//   return false;
// };

// setPrototype.remove = function(item){
//   removeFromArray(this._storage, item);
// };

// var removeFromArray = function(array, value){
//   var index = array.indexOf(value);
//   if (index!==-1){
//     array.splice(index, 1);
//   }
// };

