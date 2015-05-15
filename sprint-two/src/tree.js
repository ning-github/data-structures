var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  var isInside = false;
  var drill = function(tree){
    if(tree.value === target){
      isInside = true;
    } else if (tree.children.length>0){
      for(var i=0; i < tree.children.length; i++){
        drill(tree.children[i]);
      }
    }
  }
  drill(this);
  return isInside;
};

var extend = function(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild    O(n)   linear time operation (needs to traverse to the end of the tree)
 * contains    O(n)   linear time operation (needs to traverse through tree to check if inside)
 *
 */
