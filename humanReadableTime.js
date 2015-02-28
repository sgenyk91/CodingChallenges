/* CHALLNEGE:
* Convert a number to HH:MM:SS (if single digit must have 0 in front)
*/

function humanReadable(seconds) {
  var hours = addZero(Math.floor(seconds / 3600));
  seconds = seconds % 3600;
  var minutes = addZero(Math.floor(seconds / 60));
  seconds = addZero(seconds % 60);
  return hours + ':' + minutes + ':' + seconds;
}

function addZero(time) {
  if (time.toString().length == 1) {
    time = '0' + time;
  }
  return time;
}