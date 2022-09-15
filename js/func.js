'use strict'
function ansNo(asking) {
  while (asking !== 'y' && asking !== 'yes' && asking !== 'n' && asking !== 'no') {
    asking = prompt('that was not an answer choice, again answer with only "y", "yes", "n", or "no" ').toLowerCase();
  } if (asking === 'n' || asking === 'no') {
    // console.log('yes! thats correct next question!');
    alert('yes! thats correct next question!');
    score++;
  } else {
    while (asking === 'y' || asking === 'yes') {
      asking = prompt('That is incorrect please read my bio again and try again. Am i 26 years old?').toLowerCase();
    } if (asking === 'n' || asking === 'no') {
      // console.log('correct next question!');
      alert('correct next question!');
      score++;
    }
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