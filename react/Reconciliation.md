1. Different type of DOM will casue rebuild, unmount then mount, such as <div> -> <span>
2. Same type will recurse child nodes:
  1. nodes without key, compare by order
  2. nodes with keys, compare by keys
