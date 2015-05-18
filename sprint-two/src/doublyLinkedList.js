var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // instantiate an object of Node class
    var linkListNode = Node(value);
    // if the linked list is empty
    if(list.head === null) {
      //since with this add, there is only one node
      list.head = linkListNode;  // it is both head
      list.tail = linkListNode;  // and tail
    } else {  // if the list were not empty, then
      list.tail.next = linkListNode;  // the current tail will now point to the added node
      list.tail = linkListNode; // the tail label now points to the newly added node
    }
  };

  list.removeHead = function(){
    // store what the old head is currently pointing to (second node, soon to be first)
    var newHead = list.head.next;
    // store the soon-to-be-gone head's value (for return purposes)
    var oldValue = list.head.value;
    delete list.head;
    // following deletion, the list.head label now points to what used to be second
    list.head = newHead;
    return oldValue;
  };

  list.contains = function(target){
    var inside = false;
    // recursively drill down each link level to see if there is match
    var drill = function (node) {
      if (node.value === target) {
        inside = true;
      } else if (node.next) {
        drill(node.next);
      }
    }
    drill(list.head);
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
 *   add         O(1) constant time operation (only needs to move some pointers)
 *   removeHead  O(n) linear time operation (because it needs to traverse tree to find the removee's preceding node, so that it can reattach that preceding pointer)
 *   contains    O(n) linear time operation (needs to traverse to find match)
 */

