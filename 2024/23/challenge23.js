function findMissingNumbers(nums) {
  const cleanNums = Array.from(new Set(nums));
  const n = Math.max(cleanNums.length, Math.max(...cleanNums));

  return Array
    .from({ length: n }, (_, i) => i + 1)
    .filter(num => !cleanNums.includes(num));
}

module.exports = findMissingNumbers;