function processData(input) {
  input = input.split('\n').slice(1);
  var result = [];
  for (var i = 0; i < input.length; i++) {
    var binary = (parseInt(input[i])).toString(2);
    while (binary.length < 32) {
      binary = '0' + binary;
    }
    var binaryFlip = '';
    for (var j = 0; j < binary.length; j++) {
      if (binary[j] === '0') {
        binaryFlip += '1';
      } else {
        binaryFlip += '0';
      }
    }
    result.push(parseInt(binaryFlip, 2));
  }
  console.log(result.join('\n'));
}