var Set = function(){
  var set = Object.create(setPrototype);
// _ communicates to other developers not to directly access _storage. (similar to private variables in C++ and getter/setter access instead)
  
// the below is a Hash Table impmlementation of set
  // this is meant to demonstrate how js Objects are essentially
  //  just sets that are created with hash tables

  // the time complexity of all functions in this set is CONSTANT time
  //  - O(n)  

  set._storage = new HashTable();
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.insert(item, item);
};

setPrototype.contains = function(item){
  if (this._storage.retrieve(item)){
    return true;
  }
  return false;
};

setPrototype.remove = function(item){
  this._storage.remove(item);
};


/*
 * Complexity: What is the time complexity of the above functions (for Array)?
 *
 * add      O(1)  constant time operation (unaffected by how many other properties are stored)
 * contains O(n)  linear time operation (needs to traverse through collection, so higher the size, higher the work)
 * remove   O(1)  constant time operation (targeted removal, unaffected by input size)
 *
 */


 /******* Object implementation. will be refactoring for HashTable implemenetation

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
*/
