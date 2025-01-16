function isTreesSynchronized(tree1, tree2) {
  function areMirrors(node1, node2) {
    if(!node1 && !node2) return true;
    if(!node1 || !node2 || node1.value !== node2.value) return false;

    return (
      areMirrors(node1.left, node2.right) &&
      areMirrors(node1.right, node2.left)
    );
  }

  const synchronized = areMirrors(tree1, tree2);

  return [synchronized, tree1.value];
}

module.exports = isTreesSynchronized;