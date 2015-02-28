/* CHALLENGE: 
* Given a multidimensional array, traverse through the array in a clockwise spiral pattern going inward
*/

snail = function(array) {
  var results = [];
  var x = 0;
  var y = 0;
  var baseX = 0;
  var baseY = 1;
  var lengthX = array[0].length;
  var lengthY = array.length;
  var totalLength = lengthX * lengthY;
  if (lengthY === 1) {
    return array[0];
  }
  while (results.length !== totalLength) {
    while (x < lengthX) {
      results.push(array[y][x]);
      x++;
    }
    x--;
    lengthX--;
    y++;
    while (y < lengthY) {
      results.push(array[y][x]);
      y++;
    }
    y--;
    lengthY--;
    x--;
    while (x >= baseX) {
      results.push(array[y][x]);
      x--;
    }
    x++;
    baseX++;
    y--;
    while(y >= baseY) {
      results.push(array[y][x]);
      y--;
    }
    y++;
    baseY++;
    x++;
  }
  return results;
}