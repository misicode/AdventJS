function treeHeight(tree) {
  if (!tree) return 0;

  const depthLeft = treeHeight(tree.left);
  const depthRight = treeHeight(tree.right);

  return Math.max(depthLeft, depthRight) + 1;
}

module.exports = treeHeight;