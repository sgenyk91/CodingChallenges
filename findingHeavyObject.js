/* CHALLNEGE:
* Using a scale twice, find the heavier object compared to eight other identical objects
*/

function pick(bags, scale) {
  var lastMeasure;
  var firstThree = bags.slice(0, 3);
  var middleThree = bags.slice(3, 6);

  var firstScaleResult = scale.weigh(firstThree, middleThree);
  if (firstScaleResult === 1) {
    lastMeasure = middleThree;
  } else if (firstScaleResult === -1) {
    lastMeasure = firstThree;
  } else {
    lastMeasure = bags.slice(6, 9);
  }

  var secondScaleResult = scale.weigh(lastMeasure.slice(0, 1), lastMeasure.slice(1, 2));
  if (secondScaleResult === 1) {
    return lastMeasure[1];
  } else if (secondScaleResult === -1) {
    return lastMeasure[0];
  } else {
    return lastMeasure[2];
  }
}