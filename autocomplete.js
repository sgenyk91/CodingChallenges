/* CHALLNEGE:
* Given a dictionary and input, return  a list of words in dictionary that can complete the input
*/

function autocomplete(input, dictionary) {
  var results = [];
  input = input.replace(/[^a-zA-Z]/g, '');
  var inputLength = input.length;
  for (var i = 0; i < dictionary.length; i++) {
    if (dictionary[i].slice(0, inputLength).toLowerCase() === input.toLowerCase()) {
      results.push(dictionary[i]);
    }
  }
  return results.slice(0, 5);
}