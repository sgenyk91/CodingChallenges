/* CHALLENGE:
* Given a set of arrays, all of them should be combined to form a single array
* Input [1, 2, 3], [4, 5] Output: [1,4,2,5,3,null]
*/

function interleave() {
  var args = Array.prototype.slice.call(arguments);
  args.sort(function(a, b) {
    return b - a;
  });
  if (args[0] === null) {
    return args;
  }
  var result = [];
  var len = args[0].length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < args.length; j++) {
      if (!args[j][i]) {
        result.push(null);
      } else {
        result.push(args[j][i]);
      }
    }
  }
  return result;
}