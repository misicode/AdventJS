function execute(code) {
  let result = 0, i = 0;

  while(i < code.length) {
    switch(code.charAt(i)) {
      case ">":
        i++;
        break;
      case "+":
        result++;
        i++;
        break;
      case "-":
        result--;
        i++;
        break;
      case "[":
      case "]":
        if(result === 0) {
          i = code.indexOf("]", i) + 1;
        } else {
          i = code.lastIndexOf("[", i) + 1;
        }
        break;
      case "{":
      case "}":
        if(result === 0) {
          i = code.indexOf("}", i) + 1;
        } else {
          i++;
        }
        break;
    }
  }

  return result;
}

module.exports = execute;