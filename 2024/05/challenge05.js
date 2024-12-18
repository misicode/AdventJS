function organizeShoes(shoes) {
  const pairs = shoes.reduce((acc, { type, size }) => {
    acc[size] ??= { I: 0, R: 0 };
    acc[size][type]++;
    return acc;
  }, {});

  const result = [];

  for(const [size, type] of Object.entries(pairs)) {
    const pairsCount = Math.min(type.I, type.R);

    for(let i = 0; i < pairsCount; i++) {
      result.push(Number(size));
    }
  }

  return result;
}

module.exports = organizeShoes;