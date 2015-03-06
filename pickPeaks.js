function pickPeaks(arr){
  var result = {pos: [], peaks: []};
  var maybe = null;
  var index = null;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && (arr[i - 1] !== undefined || arr[i + 1] !== undefined)) {
      if (arr[i] > arr[i + 1]) {
        result.pos.push(i);
        result.peaks.push(arr[i]);
      } else if (arr[i] === arr[i + 1] && !maybe) {
        maybe = arr[i];
        index = i;
      }
    }
    if (maybe && maybe > arr[i + 1]) {
      result.pos.push(index);
      result.peaks.push(maybe);
      maybe = null;
      index = null;
    } else if (maybe && maybe < arr[i + 1]) {
      maybe = null;
      index = null;
    }
  }
  return result;
}