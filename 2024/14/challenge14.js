function minMovesToStables(reindeer, stables) {
  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  return reindeer.reduce((acc, r, i) => {
    return acc + Math.abs(r - stables[i]);
  }, 0);
}

module.exports = minMovesToStables;