var Tree =
  function Tree(key, left, right, parent) {
    this.key = key || null;
    this.left = left || null;
    this.right = right || null;
    this.parent = parent || null;
  }

var checkTreeProperty = function (treeProperty) {
  return treeProperty;
}

var insertKey = function (tree, key) {
  if (key === tree.key) {
    return tree;
  }

  if (key > tree.key) {
    if (tree.right === null) {
      tree.right = new Tree(key, null, null, tree);
      return tree.right
    } else {
      return insertKey(tree.right, key);
    }
  }

  if (key < tree.key) {
    if (tree.left === null) {
      tree.left = new Tree(key, null, null, tree);
      return tree.left
    } else {
      return insertKey(tree.left, key);
    }
  }
}

returnTree = function (tree, key) {
  if (key === tree.key) {
    return tree;
  }

  if (key < tree.key) {
    return returnTree(tree.left, key);
  }

  if (key > tree.key) {
    return returnTree(tree.right, key);
  }
}



var shuffle = function (o) { //v1.0
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};



