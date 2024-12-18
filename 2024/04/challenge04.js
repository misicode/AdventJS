function createXmasTree(height, ornament) {
  const tree = Array.from({ length: height }, (_, i) => {
    const spaces = "_".repeat(height - (i + 1));
    const leaves = ornament.repeat(2 * (i + 1) - 1);
    return spaces + leaves + spaces;
  });

  const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);

  return [...tree, trunk, trunk].join("\n");
}

module.exports = createXmasTree;