var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // obtain what would be the hash for this key
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get the cell (or house) for this hash
  var cell = this._storage.get(i);
  //check if this cell exists already (this will account for collisions)
  if (cell){
    cell.push([k,v]); //push into that cell
  } else {  //if this is the first tuple for that hash
    this._storage.set(i, [ [k,v] ]);  //create the cell, which contains the tuple
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var cell = this._storage.get(i);
  for (var j = 0; j < cell.length; j++) {
    if (cell[j][0] === k){
      return cell[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var cell = this._storage.get(i);
  for (var j = 0; j < cell.length; j++) {
    if (cell[j][0] === k){
      cell.splice(j,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
    
    ALL O(n) 
    - despite the linear operations of the remove and retrieve
      - this is because of it being a CONSTANT cost as a result of 
          dynamic TABLE resizing (more cells, so fewer tuples in each)

 */


/*  Notes
  
  - the storage is encapsulated such that it can only be accessed by
    the helper functions

ARRAY IMPLEMENTATION
---------------------
  storage, which essentially holds the hash table, should look
    like this (when done with an array):

              
        [ [ [k , v], [k, v] ], [         ],  [         ] ]
hashes             0                1             2    

each tuple [k,v] is held in a cell, whose index is the hash

*/