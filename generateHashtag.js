/* CHALLNEGE:
* From a string, create a hashtag that capitalizes each word and combines them together with a # in the beginning
*/

function generateHashtag(str) {
  var result = '#';
  if (str.length == 0) { return false; };
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '') { continue; };
    str[i][0] = str[i][0].toUpperCase();
    result += str[i][0].toUpperCase() + str[i].slice(1);
  }
  if (result.length > 140) { return false; };
  return result;
}