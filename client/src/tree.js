class TreeNode {
    constructor(value) {
      this.key=value.key;
      this.label=value.label;
      this.icon=value.icon;
      this.title=value.title;
      this.filePath=value.filePath
      this.parent=null;
      this.children = [];
    }
  }

 export class TreeArray {
    constructor(value, n = 3) {
      this.root = new TreeNode(value);
      this.maxChildren = n;
    }
    addChild(node, value) {
      if (node.children.length < this.maxChildren) {
        const newNode = new TreeNode(value);
        node.children.push(newNode);
        if(node.label !==value.label){
          newNode.parent=node
        }
      } else {
        console.error("too many children!")
      }
    }
    removeChildWithValue(node) {
      for (let i = 0; i < node.parent.children.length; i++) {
        if (node.parent.children[i] === node) {
          node.parent.children.splice(i, 1)
          break;
        }
      }
    }
    renameLabel(node,val) {
      for (let i = 0; i < node.parent.children.length; i++) {
        if (node.parent.children[i] === node) {
          node.label=val
          break;
        }
      }
    }
     getNodeWithValue(value) {
      const queue = [this.root];
      
      while (queue.length > 0) {
        const current = queue.shift();
        
        if (current.label === value.label) return current;
        
        for (const child of current.children) {
          queue.push(child)
        }
      }
      
      return null;
    }


    contains(value) {
      const queue = [this.root];
      
      while (queue.length > 0) {
        const current = queue.shift();
        
        if (current.label === value.label) return true;
        
        for (const child of current.children) {
          queue.push(child)
        }
      }
      
      return false;
    }

    traverseBreadthFirst(values = []) {
      const queue = [this.root];
      
      while (queue.length > 0) {
        const current = queue.shift();
        
        values.push(current.value);
        
        for (const child of current.children) {
          queue.push(child)
        }
      }
      return values;
    }

  }
