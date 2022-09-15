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
    
    function startingQuiz(){
      let quizStart = prompt('Please answer the following questions with "y", "yes", "n", or "no". Do you understand?').toLowerCase();
      quizStart(quizStart);
    }

  startingQuiz();

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

    numGuessGame();

    guessGame();
  }
  )
);




