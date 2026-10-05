// DOM Element References
const againBtn = document.querySelector(".again");
const guessNumber = document.querySelector(".number");
const guessValue = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const msg = document.querySelector(".message");
const gameScore = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

// Game State Variables
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//Functionality for check Button 
checkBtn.addEventListener("click",  () => {
// 1. want input in number format
let val = Number(guessValue.value);
//2. check input value in number format
if(!val) { 
// 2.1 show msg enter an number
msg.textContent = "Please enter a number!";
}
//3 if guessvalue is equal to randomnumber
else if(val === randomNumber) {
//3.1 change background color to green
document.body.style.backgroundColor = "green";

//3.2 show randomNumber in place of ?
guessNumber.textContent = randomNumber;
//3.3 Update highscore if score is greater than highscore
if(score > Number(highscore.textContent)) {
  // 3.3.1 update the dom
highscore.textContent = score;
}

//3.4 Update msg to correct number
msg.textContent = "Correct Number!";
}
//4. if guessvalue is less than randomnumber
else if (val < randomNumber) {

//4.1 decreement score by 1
score--;
//4.2 update the score in html
gameScore.textContent = score;
//4.3 show msg to too low
msg.textContent = "Too low!";
}
//5. if guessvalue is greater than randomnumber
else if (val > randomNumber) {
//5.1 decreement score by 1
score--;
//5.2 update the score in html
gameScore.textContent = score;
//5.3 show msg to too high  
msg.textContent = "Too high!";
}
});


//Functionality for again Button
againBtn.addEventListener("click", () => {
// 1. change background color of body  to #222
document.body.style.backgroundColor = "#222";
// 2. change the value of guessNumber to ?
guessNumber.textContent = "?";
// 3. change message to start guessing...
msg.textContent = "Start guessing...";
// 4. change the score value to 20
score = 20;
// 5. update the score in game score in html
gameScore.textContent = score;
// 6. Generate a new random number
randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log("Secret Number:", randomNumber);
});