Math.round = function(number) {
  var numString = number.toString();
  var index = numString.indexOf('.');
  if (index === -1) {
    return number;
  }
  var roundingNumber = numString.substring(0, index);
  if (parseInt(numString[index + 1]) >= 5) {
    return parseInt(roundingNumber) + 1;
  }
  return parseInt(roundingNumber);
};

Math.ceil = function(number) {
  var numString = number.toString();
  var index = numString.indexOf('.');
  if (index === -1) {
    return number;
  }
  var roundingNumber = numString.substring(0, index);
  if (parseInt(numString.slice(index + 1)) >= 1) {
    return parseInt(roundingNumber) + 1;
  }
  return parseInt(roundingNumber);
};

Math.floor = function(number) {
  var numString = number.toString();
  var index = numString.indexOf('.');
  if (index === -1) {
    return number;
  }
  return parseInt(numString.slice(0, index));
};