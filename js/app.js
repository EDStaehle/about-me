'use strict';

// .toUpperCase() toLowerCase()
let user = prompt('Hello, what is your name?');

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


    let questionOne = prompt('Am i 26 years old?').toLowerCase();

    while (questionOne !== 'y' && questionOne !== 'yes' && questionOne !== 'n' && questionOne !== 'no') {
      questionOne = prompt('that was not an answer choice, again answer with only "y", "yes", "n", or "no"').toLowerCase();
    }if (questionOne === 'n' || questionOne === 'no')
    {
      // console.log('yes! thats correct next question!');
      alert('yes! thats correct next question!');
    }else{
      while (questionOne === 'y' || questionOne === 'yes') {
        questionOne = prompt('That is incorrect please read my bio again and try again. Am i 26 years old?').toLowerCase();
      } if (questionOne === 'n' || questionOne === 'no') {
        // console.log('correct next question!');
        alert('correct next question!');
      }
    }

    let questionTwo = prompt('Was I in the Marine Corps?').toLowerCase();

    while (questionTwo !== 'y' && questionTwo !== 'yes' && questionTwo !== 'n' && questionTwo !== 'no') {
      questionTwo = prompt('that was not an answer choice, again answer with only "y", "yes", "n", or "no"').toLowerCase();
    }if (questionTwo === 'y' || questionTwo === 'yes')
    {
      // console.log('yes! thats correct next question!');
      alert('yes! thats correct next question!');
    }else{
      while (questionTwo === 'n' || questionTwo === 'no') {
        questionTwo = prompt('That is incorrect please read my bio again and try again. Was I in the Marine Corps?').toLowerCase();
      } if (questionTwo === 'y' || questionTwo === 'yes') {
        // console.log('correct next question!');
        alert('correct next question!');
      }
    }
    let questionThree = prompt('Did I teach people how to swim?').toLowerCase();

    while (questionThree !== 'y' && questionThree !== 'yes' && questionThree !== 'n' && questionThree !== 'no') {
      questionThree = prompt('that was not an answer choice, again answer with only "y", "yes", "n", or "no"').toLowerCase();
    }if (questionThree === 'n' || questionThree === 'no')
    {
      // console.log('yes! thats correct next question!');
      alert('yes! thats correct next question!');
    }else{
      while (questionThree === 'y' || questionThree === 'yes') {
        questionThree = prompt('That is incorrect please read my bio again and try again. Did I teach people how to swim?').toLowerCase();
      } if (questionThree === 'n' || questionThree === 'no') {
        // console.log('correct next question!');
        alert('correct next question!');
      }
    }
    let questionFour = prompt('Do i want to become a Cybersecurity pro?').toLowerCase();

    while (questionFour !== 'y' && questionFour !== 'yes' && questionFour !== 'n' && questionFour !== 'no') {
      questionFour = prompt('that was not an answer choice, again answer with only "y", "yes", "n", or "no"').toLowerCase();
    }if (questionFour === 'n' || questionFour === 'no')
    {
    //  console.log('yes! thats correct next question!');
      alert('yes! thats correct next question!');
    }else{
      while (questionFour === 'y' || questionFour === 'yes') {
        questionFour = prompt('That is incorrect please read my bio again and try again. Am I trying to become a Cybersecurity pro?').toLowerCase();
      } if (questionFour === 'n' || questionFour === 'no') {
        // console.log('correct next question!');
        alert('correct next question!');
      }
    }
    let questionFive = prompt('Is playing video games my favorite thing to do?').toLowerCase();

    while (questionFive !== 'y' && questionFive !== 'yes' && questionFive !== 'n' && questionFive !== 'no') {
      questionFive = prompt('that was not an answer choice, again answer with only "y", "yes", "n", or "no"').toLowerCase();
    }if (questionFive === 'y' || questionFive === 'yes')
    {
      // console.log('you got them all right!');
      alert('you got them all right!');
      const audio = new Audio();
      audio.src = "victoryyyyyyy.mp3";
      audio.play();
    }else{
      while (questionFive === 'n' || questionFive === 'no') {
        questionFive = prompt('That is incorrect please read my bio again and try again. Is playing video games my favorite thing to do?').toLowerCase();
      } if (questionFive === 'y' || questionFive === 'yes') {
        // console.log('you got them all right!');
        alert('you got them all right!');
        const audio = new Audio();
      audio.src = "victoryyyyyyy.mp3";
      audio.play();
      }
    }
    // console.log(`${user} i hope you had a good time on my site and learned a bit about me :)`)
    alert(`${user} i hope you had a good time on my site and learned a bit about me :)`)
  }
  )
);

