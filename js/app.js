'use strict';

// import { ansNo } from "./func";

// .toUpperCase() toLowerCase()
let user = prompt('Hello, what is your name?');
let questionNum;
let score = 0;
alert(`hey there ${user}, welcome`);

const button = document.querySelectorAll('button');

button.forEach(button =>
  button.addEventListener('click', () => {
    let quizStart = prompt('Please answer the following questions with "y", "yes", "n", or "no". Do you understand?').toLowerCase();

    while (quizStart !== 'y' && quizStart !== 'yes' && quizStart !== 'n' && quizStart !== 'no') {
      quizStart = prompt('that was not an answer choice, again answer with only "y", "yes", "n", or "no"').toLowerCase();
    }
    if (quizStart === 'y' || quizStart === 'yes') {
      // console.log('okay lets begin');
      alert('okay lets begin');
    }
    else {
      while (quizStart === 'n' || quizStart === 'no') {
        quizStart = prompt('you need to understand please answer with "y", or "yes"').toLowerCase();
      } if (quizStart === 'y' || quizStart === 'yes') {
        // console.log('okay lets begin');
        alert('okay lets begin');
      }
    }
    function questionNumOne() {
      // let questionNum = 1;
      let asking = prompt('Am I 26 years old?');
      ansNo(asking);
    }
    questionNumOne();

    function questionNumTwo() {
      // let questionNum = 2;
      let asking = prompt('Was I in the Marine Corps?').toLowerCase();
      ansYes(asking);
    }
    questionNumTwo();

    function questionNumThree() {
      let asking = prompt('Did I teach people how to swim?')
      ansNo(asking);
    }
    questionNumThree();
    function questionNumFour() {
      let asking = prompt('Do I want to become a cybersecurity pro?')
      ansNo(asking);
    }
    questionNumFour();
    function questionNumFive() {
      let asking = prompt('Is playing video games my favorite thing to do?');
      ansYes(asking);
    }
    questionNumFive();
    function numGuessGame() {
      let numGuess = 0;
      let guessesLeft = 0;
      const myNum = 15;
      while (guessesLeft < 4 && numGuess !== myNum) {
        numGuess = parseInt(prompt('Guess the number 1-20'))
        if (numGuess < myNum) {
          alert('No go higher')
          guessesLeft++;
          alert(`you got ${4 - guessesLeft}, guess remaining.`);
        } else if (numGuess > myNum) {
          alert('No go lower');
          guessesLeft++;
          alert(`you got ${4 - guessesLeft}, guess remaining.`);
        } else if (numGuess == myNum) {
          alert("yeah thats it good job yay you wow youre so cool omgosh how did you know you must be so smart i can beleive you got it in only four guess how the heck i am bamboozled to say the least flabbergasted if you will this is just a revolutionary expierience");
          score++;
        }
        if (guessesLeft === 4) {
          alert('you have run out of chances.');
        }
      }
    }
    numGuessGame();
    function guessGame() {
      let carBrand = ['nissan', 'mitsubishi', 'mclarren', 'ford', 'audi'];
      let correct = false;
      // let numAns = 0;
      let userAttempts = 6;
      for (let i = 0; i < userAttempts; i++) {
        let quetion = prompt('what is my favorite car brand?').toLowerCase();
        for (let j = 0; j < carBrand.length; j++) {
          if (quetion === carBrand[j]) {
            alert(`yes thats correct, i love ${carBrand[j]}`);
            correct = true;
            score++;
            break;
          } else {
            while (quetion !== carBrand[j] && userAttempts > 0) {
              quetion = prompt('thta is not correct what is my favoirte car brand').toLowerCase();
              userAttempts--;
              alert('you have ' + userAttempts + ' attempts left');
            } if (quetion === carBrand[j]) {
              alert('yes that is correct');
              correct = true;
              score++;
              break;
            }

          }


        }
        if (correct === true) {
          break;
        }

      }
      alert(`possible answers were ${carBrand}`);
      alert(`your score is ${score} good job`);
    }
    guessGame();
  }
  )
);




