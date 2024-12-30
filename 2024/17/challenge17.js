function detectBombs(grid) {
  const combinations = [
    [-1, -1], [-1, 0], [-1, +1],
    [0, -1], [0, +1],
    [+1, -1], [+1, 0], [+1, +1]
  ];

return grid.map((rows, i) =>
rows.map((_, j) => {
  const adjPos = combinations.map(pair => [pair[0] + i, pair[1] + j]);

  return adjPos.reduce((acc, pos) => {
    if(
      pos[0] >= 0 && pos[0] < grid.length &&
      pos[1] >= 0 && pos[1] < grid.length &&
      grid[pos[0]][pos[1]]
    ) {
      acc++;
    }
    return acc;
  }, 0);
})
);
}

module.exports = detectBombs;