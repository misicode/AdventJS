function getCompleted(timeWorked, totalTime) {
  const aux = [3600, 60, 1];

  const tw = timeWorked.split(":").reduce((acc, t, i) => {
    acc += t * aux[i];
    return acc;
  }, 0);

  const tt = totalTime.split(":").reduce((acc, t, i) => {
    acc += t * aux[i];
    return acc;
  }, 0);

  return `${Math.round(tw / tt * 100)}%`;
}

module.exports = getCompleted;