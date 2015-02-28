/* CHALLENGE: 
* Emulate justified text with monospace font.
* String is a single line.
* Longest word never greater than length
* Length is a number to determine number of characters in a line (including whitespace)
 */
 
var justify = function(str, len) {
  str = str.split(' ');
  var lengthChecker = 0;
  var line = [];
  var paragraph = '';
  for (var i = 0; i <= str.length; i++) {
    if (i === str.length || lengthChecker + str[i].length > len) {
      var leftOver = len - lengthChecker + 1;
      var numberOfSpacesToAddPerWord = Math.floor(leftOver / (line.length - 1));
      var spacePerWord = makeSpace(numberOfSpacesToAddPerWord);
      var extraSpaces = leftOver % (line.length - 1);
      paragraph += addLine(line, extraSpaces, spacePerWord, i === str.length);
      line = [];
      lengthChecker = 0;
    }
    if (i === str.length) {
      break;
    }
    lengthChecker += str[i].length + 1;
    line.push(str[i]);
  }
  return paragraph;
};

function makeSpace(number) {
  var result = ' ';
  if (number === Infinity) {
    return '';
  }
  while (number > 0) {
    result += ' ';
    number --;
  }
  return result;
}

function addLine(lineArray, extraSpaces, spacePerWord, newLine) {
  var result = '';
  if (newLine) {
    extraSpaces = 0;
    spacePerWord = ' ';
  }
  for (var i = 0; i < lineArray.length - 1; i++) {
    if (extraSpaces > 0) {
      result += lineArray[i] + spacePerWord + ' ';
    } else {
      result += lineArray[i] + spacePerWord;
    }
    extraSpaces--;
  }
  result += lineArray[lineArray.length - 1];
  if (!newLine) {
    result += '\n';
  }
  return result;
}