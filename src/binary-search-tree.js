const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.rootTwo = null;
  }

  root() {
    return this.rootTwo;
  }

  add(data) {
    this.rootTwo = addWithin(this.rootTwo, data);
    function addWithin(nodeAdd, data) {
      if(!nodeAdd){
        return new Node(data)
      }
    
      if(nodeAdd.data === data){
        return nodeAdd;
      }
      if(data < nodeAdd.data){
        nodeAdd.left = addWithin(nodeAdd.left, data);
      } else {
        nodeAdd.right = addWithin(nodeAdd.right, data);
      }
      return nodeAdd;
    }  
  }

  has(data) {
    return searchWithin(this.rootTwo, data);

    function searchWithin(nodeHas, data) {
      if(!nodeHas){
        return false;
      }

      if(nodeHas.data === data){
        return true;
      }

      return data < nodeHas.data ?
        searchWithin(nodeHas.left, data):
        searchWithin(nodeHas.right, data);
    }
  }

  find( data ) {
    return addNewFind(this.rootTwo, data);
    function addNewFind(nodeFind, data) {
      if (!nodeFind) {
        return null;
      }
      if (nodeFind.data === data) {
        return nodeFind;
      }
      if (data > nodeFind.data) {
        return addNewFind(nodeFind.right, data);
      }
      if (data < nodeFind.data) {
        return addNewFind(nodeFind.left, data);
      }
    }
  }

  remove( data ) {
    this.rootTwo = addNewRemove(this.rootTwo, data);

    function addNewRemove(nodeRemove, data) {
      if (!nodeRemove) {
        return null;
      }

      if (data > nodeRemove.data) {
        nodeRemove.right = addNewRemove(nodeRemove.right, data);
        return nodeRemove;
      } else if (data < nodeRemove.data) {
        nodeRemove.left = addNewRemove(nodeRemove.left, data);
        return nodeRemove;
      } else {
        if (!nodeRemove.right && !nodeRemove.left) {
          return null;
        }
        if (!nodeRemove.right) {
          nodeRemove = nodeRemove.left;
          return nodeRemove;
        }
        if (!nodeRemove.left) {
          nodeRemove = nodeRemove.right;
          return nodeRemove;
        }
      
        let greatestAreaLeft = nodeRemove.left;

        while (greatestAreaLeft.right) {
          greatestAreaLeft = greatestAreaLeft.right;
        }

        nodeRemove.data = greatestAreaLeft.data;

        nodeRemove.left = addNewRemove(nodeRemove.left, greatestAreaLeft.data);

        return nodeRemove;
        
      }
    }
  }
  

  min() {
    if(!this.rootTwo){
      return
    }
     
    let node = this.rootTwo;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.rootTwo){
      return
    }
     
    let node = this.rootTwo;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};