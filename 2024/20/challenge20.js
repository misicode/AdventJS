function fixGiftList(received, expected) {
  [...received].forEach(rec => {
    const indexExp = expected.indexOf(rec);

    if(indexExp !== -1) {
      received.splice(received.indexOf(rec), 1);
      expected.splice(indexExp, 1);
    }
  });

  const countGifts = (gifts) =>
    gifts.reduce((acc, gift) => {
      acc[gift] = (acc[gift] ??= 0) + 1;
      return acc;
    }, {});

  return {
    missing: countGifts(expected),
    extra: countGifts(received)
  };
}

module.exports = fixGiftList;