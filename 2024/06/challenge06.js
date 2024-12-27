function inBox(box) {
  if(box[0].includes("*") || box[box.length - 1].includes("*")) return false;
  
  for(let i = 1; i < box.length - 1; i++) {
    if(box[i].substring(1, box[i].length - 1).includes("*")) return true;
  }

  return false;
}

module.exports = inBox;