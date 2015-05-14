var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var linkListNode = Node(value);
    if(list.head === null) {
      list.head = linkListNode;
      list.tail = linkListNode;
    } else {
      list.tail.next = linkListNode;
      list.tail = linkListNode;
    }
  };

  list.removeHead = function(){
    var newHead = list.head.next;
    var oldValue = list.head.value;
    delete list.head;
    list.head = newHead;
    return oldValue;
  };

  list.contains = function(target){
    var inside = false;
    var drill = function (node) {
      if (node.value === target) {
        inside = true;
      } else if (node.next) {
        drill(node.next);
      }
    }
    return inside;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
