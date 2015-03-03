function processData(input) {
  input = input.split('\n');
  input = input[0].split(' ');
  for (var i = 0; i < input.length; i++) {
    var temp = input[i];
    input[i] = null;
    if (input.indexOf(temp) === -1) {
      return temp;
    }
    input[i] = temp;
  }
}