Reconciliation proccess:
1. 

diff:
  1. Different type of DOM will casue rebuild, unmount then mount, such as <div> -> <span>
  2. only compare old and new tree same level, that's why it can be O(n)
  3. Same type will recurse child nodes, specail case like like need key:
    1. nodes without key, compare by order
    2. nodes with keys, compare by keys
