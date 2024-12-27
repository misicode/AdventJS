function moveTrain(board, mov) {
  // Code here
  const position = [];

  board.forEach((line, index) => {
    if(line.includes("@")) {
      position.push(index);
      position.push(line.indexOf("@"));
    }
  });

  const moves = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };

  const newX = position[0] + moves[mov][0];
  const newY = position[1] + moves[mov][1];
  const stop = board[newX]?.[newY];

  if(stop === "*") {
    return "eat";
  } else if(stop === "·") {
    return "none";
  } else {
    return "crash";
  }
}

module.exports = moveTrain;