function distributeWeight(weight) {
  const boxes = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  };
  const boxesWeights = [10, 5, 2, 1];
  const result = [];
  let i = 0;

  while(weight > 0) {
    const div = weight / boxesWeights[i];

    if(div >= 1) {
      const base = boxes[boxesWeights[i]].at(-1);
      result[0] = `${base}${result[0]?.slice(base.length, -1) ?? ""}`;
      result.unshift(...boxes[boxesWeights[i]].slice(0, -1));
      
      weight -= boxesWeights[i];
      i = 0;
      continue;
    }

    i++;
  }

  return result.join("\n");
}

module.exports = distributeWeight;