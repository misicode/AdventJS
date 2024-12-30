function removeSnow(s) {
  const road = s.split("");
  let i = 0;
  
  while(i + 1 < road.length) {
    if(road[i] === road[i + 1]) {
      road.splice(i, 2);
      i = 0;
      continue;
    }

    i++;
  }

  return road.join("");
}

module.exports = removeSnow;