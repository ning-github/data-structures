var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {
    storage: {},
    storageSize: 0
  };

  extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  },
  pop: function() {
    if(this.storageSize > 0) {
      var result = this.storage[this.storageSize-1];
      delete this.storage[this.storageSize-1];
      this.storageSize--;
      return result;
    }

  },
  size: function() {
    return this.storageSize;
  }
};

var extend = function(obj1, obj2) {
  for(var key in obj2) {
    obj1[key] = obj2[key];
  }
}

