/* CHALLENGE:
* Given a multidimensional array, each index contains an array with an interval of two values.
* The first index is always lower than the second
* Find the sum of all the intervals
* If intervals overlap, the overlapped numbers cannot be accounted for twice
*/

function sumIntervals(intervals){
  for (var i = 0; i < intervals.length; i++) {
    for (var j = i + 1; j < intervals.length; j++) {
      if (intervals[i][0] <= intervals[j][0] && intervals[i][1] >= intervals[j][1]) {
        intervals.splice(j, 1);
        --j;
      } else if (intervals[i][0] <= intervals[j][1] && intervals[i][0] > intervals[j][0]) {
        intervals[i][0] = intervals[j][0];
        intervals.splice(j, 1);
        --j;
      } else if (intervals[i][1] >= intervals[j][0] && intervals[i][1] < intervals[j][1]) {
        intervals[i][1] = intervals[j][1];
        intervals.splice(j, 1);
        --j;
      }
    }
  }
  var result = 0;
  for (var k = 0; k < intervals.length; k++) {
    result += intervals[k][1] - intervals[k][0];
  }
  return result;
}