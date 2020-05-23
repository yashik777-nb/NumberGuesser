/* Game functionality
Player Must Guess a number between a Min and Max
Player gets a certain ammount of guesses
Notify player of guesses remaining
Notify player of the correct answer if he looses
Let player choose to play again
*/

// Game Values
let min = 1,
  max = 10,
  winnnigNum = 2,
  guessesLeft = 3;

// UI Variables
const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.getElementById("guess-input"),
  guessButton = document.getElementById("guess-btn"),
  message = document.querySelector(".message");

// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for Guess
guessButton.addEventListener("click", function (e) {
  let guess = parseInt(guessInput.value);
  // Validate Input
  if (isNaN(guess) || guess < min || guess > max)
    setMessage(`Please Enter a Number between ${min} and ${max}.`, "red");
  // Check if it is a winning number
  if (guess == winnnigNum) {
    //   Disbale Input
    guessInput.disabled = true;
    // Border Green and Message
    setMessage(`${winnnigNum} is Correct!, YOU WIN!`, "green");
  }
});

// Set Message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;
}
