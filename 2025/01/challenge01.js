function filterGifts(gifts) {
  return gifts.filter(gift => !gift.includes("#"));
}

module.exports = filterGifts;