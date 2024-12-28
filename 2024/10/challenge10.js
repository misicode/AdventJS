function compile(instructions) {
  const result = {};
  let i = 0;

  while(i < instructions.length) {
    const instruction = instructions[i].split(" ");

    switch(instruction[0]) {
      case "MOV":
        result[instruction[2]] = result[instruction[1]] ?? Number(instruction[1]);
        i++;
        break;
      case "INC":
        result[instruction[1]] ??= 0;
        result[instruction[1]]++;
        i++;
        break;
      case "DEC":
        result[instruction[1]] ??= 0;
        result[instruction[1]]--;
        i++;
        break;
      case "JMP":
        result[instruction[1]] ??= 0;

        if(result[instruction[1]] === 0) {
          i = Number(instruction[2]);
        } else {
          i++;
        }
        break;
    }
  }

  return result.A;
}

module.exports = compile;