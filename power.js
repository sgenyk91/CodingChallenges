function power(array) {
  var result = [[]];
  function recursion(leftOver, arr) {
    arr = arr || [];
    if (leftOver.length === 0) {
      return;
    } else {
      for (var i = 0; i < leftOver.length; i++) {
        arr.push(leftOver[i]);
        var temp = arr.slice();
        result.push(temp);
        recursion(leftOver.slice(i + 1), arr);
        arr.pop();
      }
    }
  }
  recursion(array);
}