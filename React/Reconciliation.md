Reconciliation proccess:
1. when state or props change, render() will return a new VDOM
2. compare the old and new VDOM with react-diff
3. get the difference
4. render DOM tree with the difference

Diff:

two assumptions: 

difference nodes will produce different trees;

developer will get a key prop to stable child element
 
 
  1. Different type of DOM will casue rebuild, unmount the old then mount the new node, such as ```<div> -> <p>```,and if the parent node deleted, all the children will be tore down too.
  2. Only compare old and new tree with same level, that's why it can be O(n)
  3. Same type will compare with the node attribute such as style className, then recurse child nodes, specail case like list need key:
      1. nodes without key, compare by order
      2. nodes with keys, compare by keys
  4. during the re-render, when component updates, the instance remains unchanged which means the state can stay the same, but parent will update the props of children instance and call componentWillReceiveProps(), componentWillUpdate(). 
So the process is like: 

 Start from root => compare current node type =>(if same type) node attribute content => recurse chilren(with key)


PS: ```<div> -> <p>``` will destory the whole div tree call componentWillUnmount and rebuild the span tree, all state of div tree will be lost.

The key of performance optimazation is to avoid unnecessary re-render(reconciliation) by shouldComponentUpdate return false etc.  And put unique key of list. Don't change the node type.
  
  
- [ ] So why pureComponent can help children get away from re-render, and how?