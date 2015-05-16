var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  // obtain what would be the hash for this key
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get the cell (or house) for this hash
  var cell = this._storage.get(i);
  //check if this cell exists already (this will account for collisions)
  if (cell){
    ///NOTE!!!!! this solution does not yet check for a duplicate k (not that k is unique, even if the i hash it produces is not);
    for (var i = 0; i < cell.length; i++) {
      var tuple = cell[i];
      if (tuple[0]===k){
        tuple[1]=v;
      }
    };
    cell.push([k,v]); //push into that cell
  } 

  //if this is the first tuple for that hash
  this._storage.set(i, [ [k,v] ]);  //create the cell, which contains the tuple

  // resizing
  this._size++;
  if (this._size/this._limit >= 0.75){
    this.resize(this._limit*2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var cell = this._storage.get(i);
  if (!cell){   //this check is very important because cell could be undefined
    return null;
  }
  // if cell IS undefined, this will cause an error (can't .length undefined)
  for (var j = 0; j < cell.length; j++) {
    if (cell[j][0] === k){
      return cell[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var cell = this._storage.get(i);
  for (var j = 0; j < cell.length; j++) {
    if (cell[j][0] === k){
      cell.splice(j,1);
      //resizing
      this._size--;  
      if (this._size/this._limit <= 0.25){
        this.resize(this._limit/2);
      }
      return;  //should return after splicing because splicing affects iteration length
    }
  }
  return null;
};

// resize function for dynamic resizing
HashTable.prototype.resize = function(newSize){
  //need to reshuffle the table
  var oldStorage =  this._storage;
  this._storage = LimitedArray(newSize);
  this._limit = newSize;
  this._size = 0;

  oldStorage.each(function(eachCell, hashInd, storage){
    if (!eachCell){ return; };
    for (var i = 0; i < eachCell.length; i++) {
      var tuple = eachCell[i];
      this.insert(tuple[0],tuple[1]);
    };
  }.bind(this));  //since anon callback is free func invoc, we use bind to give it the hashTable instance's context
};




/*
 * Complexity: What is the time complexity of the above functions?
    
    ALL O(n) 
    - despite the linear operations of the remove and retrieve
      - this is because of it being a CONSTANT cost as a result of 
          dynamic TABLE resizing (more cells, so fewer tuples in each)
  
    RESIZE however, is a linear time operation O(n)
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