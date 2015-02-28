/* CHALLENGE:
* q1 is our start state.
* q2 is our accept state. We return true if this is our last state.
* q1 --> q2 when given a 1, and stays at q1 when given a 0.
* q2 --> q3 when given a 0, and stays at q2 when given a 1.
* q3 --> q2 when given a 0 or 1.
*/

function Automaton() {
   this.states = [];
}

Automaton.prototype.readCommands = function(commands, result) {
  result = result || 'q1';
  if (commands.length === 0) {
    if (result !== 'q2') {
      return false;
    }
    return true;
  } else {
    var number = commands.shift();
    if (result === 'q3') {
      result = 'q2';
    } else if ((parseInt(result[1]) + parseInt(number)) % 2 === 0) {
      result = result[0] + (parseInt(result[1]) + 1);
    }
    return Automaton.prototype.readCommands(commands, result);
  }
}

var myAutomaton = new Automaton();