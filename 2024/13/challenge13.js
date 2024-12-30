function isRobotBack(moves) {
  const directions = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1]
  };
  const pairs = {
    L: "R",
    R: "L",
    U: "D",
    D: "U"
  }
  const history = new Set();
  const movesArr = moves.split("");
  let x = 0, y = 0;

  for(let i = 0; i < movesArr.length; i++) {
    switch(movesArr[i]) {
      case "*":
        movesArr[i] = movesArr[i + 1];
        i--;
        break;
      case "!":
        movesArr[i + 1] = pairs[movesArr[i + 1]];
        break;
      case "?":
        if(history.has(movesArr[i + 1])) i++;
        break;
      default:
        x += directions[movesArr[i]][0];
        y += directions[movesArr[i]][1];
        history.add(movesArr[i]);
    }
  };

  return x === 0 && y === 0 ? true : [x, y];
}

module.exports = isRobotBack;