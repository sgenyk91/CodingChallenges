function guessGifts(wishlist, presents) {
  var result = [];
  for (var i = 0; i < presents.length; i++) {
    isMatch(presents[i].size, presents[i].clatters, presents[i].weight);
  }
  function isMatch(size, clatters, weight) {
    for (var i = 0; i < wishlist.length; i++) {
      if (wishlist[i].size === size && wishlist[i].clatters === clatters && wishlist[i].weight === weight) {
        if (result.indexOf(wishlist[i].name) === -1) {
          result.push(wishlist[i].name);
        }
      }
    }
  }
  return result;
}