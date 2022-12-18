var randNumber;
// RANDOM NUMBER GENERATOR
function randomNumber() { // IN A 'ONLOAD' FUNCTION TO ONLY LOAD ON THE GUESSING PAGE
  randNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randNumber);
  return randNumber;
}
// GUESS CHECKER
function guess(){
  var userGuess = document.getElementById('number-guess').value;
  if (userGuess == randNumber){
    window.location.href = 'results.html'; // LINKS TO THE RESULTS PAGE
  }else{
    alert('Sorry! That was the wrong guess, please try again!'); // ALLOW AS MANY TRYS NEEDED
  }
}
