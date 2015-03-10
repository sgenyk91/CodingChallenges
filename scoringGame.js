function score(dice) {
  var storage = {};
  var points = 0;
  var loops = 3;
  for (var i = 0; i < dice.length; i++) {
    storage[dice[i]] = ++storage[dice[i]] || 1;
  }
  for (var key in storage) {
    if (storage[key] >= 3) {
      var multiply = 100;
      if (key === '1') {
        multiply *= 10;
      }
      points += parseInt(key) * multiply;
      storage[key] -= 3;
      loops--;
    }
  }
  while (loops-- !== 0) {
    if (storage['1']) {
      points += 100;
      storage['1']--;
    } else if (storage['5']) {
      points += 50;
      storage['5']--;
    }
  }
  return points;
}