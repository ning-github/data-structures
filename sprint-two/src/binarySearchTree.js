var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value){
  if (value > this.value){
    if (this.right === null){
      this.right = new BinarySearchTree(value);
    }
    else{
      this.right.insert(value);
    }
  }
  else if (value < this.value){
    if (this.left === null){
      this.left = new BinarySearchTree(value);
    }
    else{
      this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value){
  var found = false;
  var recurseSearch = function(tree){
  // important to check that tree is NOT null, otherwise will error for attempted property access
    if (tree){ 
      if (tree.value === value){
        found = true;
      }
      else if (value > tree.value){
        recurseSearch(tree.right);
      }
      else {
        recurseSearch(tree.left);
      }
    }
  };
  recurseSearch(this);
  return found;
}

BinarySearchTree.prototype.depthFirstLog = function(callback){
  var rescurseTree = function(tree){
    if (tree){
      callback(tree.value);
    }
    if (tree.left){
      rescurseTree(tree.left);
    }
    if (tree.right){
      rescurseTree(tree.right);
    }
  }
  rescurseTree(this);
}

/*
 * Complexity: What is the time complexity of the above functions?
    add and contains are both O(log(n)) because it is not searching each and every one.
      - it is making an educated search (the further it searches, it will also know what NOT to search)
    depthFirstLog is O(n) linear time operation because it is visiting every single input
 */
