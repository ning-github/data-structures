var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {
    storage:{},
    queueSize:0
  };

  extend(newQueue,queueMethods);
  return newQueue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.queueSize]=value;
    this.queueSize++;
  },
  dequeue: function(){
    if(this.queueSize>0){
      var result = this.storage[0];
      delete this.storage[0];
      this.queueSize--;
      reindex(this.storage);
      return result;
    }
  },
  size: function(){
    return this.queueSize;
  }
};

var extend = function(obj1, obj2) {
  for(var key in obj2) {
    obj1[key] = obj2[key];
  }
}

var reindex = function(object){
  var i=0;
  for(var key in object){
    object[i]=object[key];
    i++;
  }
};

