var Set = function(){
  var set = Object.create(setPrototype);
// _ communicates to other developers not to directly access _storage. (similar to private variables in C++ and getter/setter access instead)
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
 *
 * add      O(1)  constant time operation (unaffected by how many other properties are stored)
 * contains O(n)  linear time operation (needs to traverse through collection, so higher the size, higher the work)
 * remove   O(1)  constant time operation (targeted removal, unaffected by input size)
 *
 */
