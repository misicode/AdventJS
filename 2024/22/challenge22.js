function generateGiftSets(gifts) {
  const combinations = [];

  function generateCombinations(size, start, current) {
    if(current.length === size) {
      combinations.push([...current]);
      return;
    }

    for(let i = start; i < gifts.length; i++) {
      current.push(gifts[i]);
      generateCombinations(size, i + 1, current);
      current.pop();
    }
  }

  for(let size = 1; size <= gifts.length; size++) {
    generateCombinations(size, 0, []);
  }

  return combinations;
}

module.exports = generateGiftSets;