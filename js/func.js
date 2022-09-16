'use strict'
function startOfQuiz(quizStart) {
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
}
function ansNo(asking) {
  while (asking !== 'y' && asking !== 'yes' && asking !== 'n' && asking !== 'no') {
    asking = prompt('that was not an answer choice, again answer with only "y", "yes", "n", or "no" ').toLowerCase();
  } if (asking === 'n' || asking === 'no') {
    // console.log('yes! thats correct next question!');
    alert('yes! thats correct next question!');
    score++;
  } else {
    while (asking !== 'n' && asking !== 'no') {
      asking = prompt('That is incorrect please read my bio again and try again. Am i 26 years old?').toLowerCase();
    } 
      // console.log('correct next question!');
      alert('correct next question!');
      score++;
  }
}
function ansYes(asking) {
  while (asking !== 'y' && asking !== 'yes' && asking !== 'n' && asking !== 'no') {
    asking = prompt('that was not an answer choice, again answer with only "y", "yes", "n", or "no"').toLowerCase();
  } if (asking === 'y' || asking === 'yes') {
    alert('yes! thats correct next question!');
    score++;
  } else {
    while (asking === 'n' || asking === 'no') {
      asking = prompt('That is incorrect please read my bio again and try again. Was I in the Marine Corps?').toLowerCase();
    } if (asking === 'y' || asking === 'yes') {
      // console.log('correct next question!');
      alert('correct next question!');
      score++;
    }
  }
}
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
      const audio = new Audio();
      audio.src = "victoryyyyyyy.mp3";
      audio.play();
    }
    if (guessesLeft === 4) {
      alert('you have run out of chances.');
    }
  }
}
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
        alert('thats not correct try again');
      }
    }
    if (correct === true) {
      break;
    }
  }
  alert(`possible answers were ${carBrand}`);
  alert(`your score is ${score} good job`);
}
