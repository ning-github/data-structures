var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var reindex = function(object){
    var i=0;
    for(var key in object){
      object[i]=object[key];
      i++;
    }
  };

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size]=value;
    size++;
  };

  someInstance.dequeue = function(){
    if (size>0){
      var element = storage[0];
      delete storage[0];
      size--;

      reindex(storage);
      return element;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

/* alternatively to reindex, could also just use:

for(var key in storage){
  storage[key-1]=storage[key];
}

*/