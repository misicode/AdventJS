function manufactureGifts(giftsToProduce) {
  return giftsToProduce.reduce((gifts, { quantity, toy }) => 
    gifts.concat(Array.from({ length: quantity }, () => toy))
  , []);
}

module.exports = manufactureGifts;