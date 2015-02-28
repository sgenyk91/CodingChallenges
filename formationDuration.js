/* CHALLNEGE:
* Given a number, convert the number to a human readable time
* Example input: 574354801 output: "18 years, 77 days, 15 hours and 1 second"
* Must include year, day, minute, and seconds (unless there is 0)
*/

function formatDuration (seconds) {
  if (seconds === 0) {
    return 'now';
  }
  var year = Math.floor(seconds / 31536000);
  seconds = seconds % 31536000;
  var day = Math.floor(seconds / 86400);
  seconds = seconds % 86400;
  var hour = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  var minute = Math.floor(seconds / 60);
  seconds = seconds % 60;

  var time = [];

  if (year) {
    time.push(year > 1 ? year += ' years' : year += ' year');
  }
  if (day) {
    time.push(day > 1 ? day += ' days' : day += ' day');
  }
  if (hour) {
    time.push(hour > 1 ? hour += ' hours' : hour += ' hour');
  }
  if (minute) {
    time.push(minute > 1 ? minute += ' minutes' : minute += ' minute');
  }
  if (seconds) {
    time.push(seconds > 1 ? seconds += ' seconds' : seconds += ' second');
  }

  var result = '';
  while (time.length > 2) {
    result += time.shift() + ', ';
  }
  
  return result + time.join(' and ');
}