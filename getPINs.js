function getPINs(observed) {
  var keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [undefined, 0, undefined]];
  var possibilities = [];
  for (var i = 0; i < observed.length; i++) {
    var temp = findNumberIndex(parseInt(observed[i]));
    var x = temp[0];
    var y = temp[1];
    possibilities.push(observed[i] + findPossibleNumbers(x, y));
  };

  var results = {};

  (function recursion(string, options) {
    string = string || '';
    if (string.length === possibilities.length) {
      results[string] = true;
      return;
    } else {
      for (var j = 0; j < options[0].length; j++) {
        recursion(string + options[0][j], options.slice(1));
      }
    }
    
  })('', possibilities);

  function findNumberIndex(number) {
    for (var i = 0; i < 4; i++) {
      var found = keypad[i].indexOf(number);
      if (found !== -1) {
        return [i, found];
      }
    }
  }

  function findPossibleNumbers(x, y) {
    var result = '';
    if (keypad[x - 1] && keypad[x - 1][y] >= 0) {
      result += keypad[x - 1][y];
    }
    if (keypad[x + 1] && keypad[x + 1][y] >= 0) {
      result += keypad[x + 1][y];
    }
    if (keypad[x][y - 1] >= 0) {
      result += keypad[x][y - 1];
    }
    if (keypad[x][y + 1] >= 0) {
      result += keypad[x][y + 1];
    }
    return result;
  }

  return Object.keys(results);
}