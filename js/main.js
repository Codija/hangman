var words = ['javascript', 'pizza', 'pancake', 'chocolate', 'hangman'];
var word = words[Math.floor(Math.random() * words.length)];
var remainingLetters = word.length;
var guesses = 10;

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

while (remainingLetters > 0 && guesses > 0) {
  // Game code goes here
  alert(answerArray.join(" "));
  var guess = prompt('Guess a letter, or click Cancel to stop playing.');
  if(guess === null) {
    break;
  } else if(guess.length !== 1) {
    alert('Please enter a single letter');
  } else {
    guesses--;
    guess = guess.toLowerCase();
    for(var j = 0; j < word.length; j++) {
        if(word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(' '));
if(guesses > 0) {
    alert('Good job! The answer was: ' + word +'.');
    var res = document.getElementById('msg').innerHTML = word;
} else {
    alert('Too bad! The answer was: ' + word +'.');
    var res= document.getElementById('msg').innerHTML = word;
}