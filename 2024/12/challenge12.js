function calculatePrice(ornaments) {
  const prices = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100
  }
  const ornArr = ornaments.split("");

  if(!/[*o^#@]$/.test(ornaments)) return undefined;

  return [...ornArr]
    .slice(0, ornArr.length - 1)
    .reduceRight((acc, orn, index) => {
      if(prices[orn] >= prices[ornArr[index + 1]]) {
        acc += prices[orn];
      } else {
        acc -= prices[orn];
      }

      return acc;
    }, prices[ornArr[ornArr.length - 1]]);
}

module.exports = calculatePrice;