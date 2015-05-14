var Graph = function(){
  this.allNodes = {};
};

Graph.prototype.addNode = function(node){
  this.allNodes[node] = {}; //property of allNodes "nodeName":{}
  this.allNodes[node].edges = []; //"nodeName":{"edges":[]}
};

Graph.prototype.contains = function(node){
  for (var key in this.allNodes) {
    if (key === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.allNodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.allNodes[fromNode].edges.indexOf(toNode)!==-1){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.allNodes[fromNode].edges.push(toNode);
  this.allNodes[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  removeFromArray(this.allNodes[fromNode].edges, toNode);
  removeFromArray(this.allNodes[toNode].edges, fromNode);

};

Graph.prototype.forEachNode = function(cb){
  for(var eachNode in this.allNodes){
    cb(eachNode);
  }
};

var removeFromArray = function(array, value){
  var index = array.indexOf(value);
  if (index!==-1){
    array.splice(index, 1);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */




