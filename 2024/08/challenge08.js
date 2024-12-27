function drawRace(indices, length) {
  const indLength = indices.length - 1;
  
  return indices.map((value, index) => {
    let lane = ("~").repeat(length);

    if(value !== 0) {
      lane = lane.split("");
      lane[(length + value) % length] = "r";
      lane = lane.join("");
    }

    return `${(" ").repeat(indLength - index)}${lane} /${index + 1}`;
  }).join("\n");
}

module.exports = drawRace;