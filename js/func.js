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
    