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
  winningNum = getWinningNum(min, max),
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

// Play Again Event Listener;
game.addEventListener("mousedown", function (e) {
  if (e.target.className == "play-again") window.location.reload();
});

// Listen for Guess
guessButton.addEventListener("click", function (e) {
  let guess = parseInt(guessInput.value);
  // Validate Input
  if (isNaN(guess) || guess < min || guess > max)
    gameOver(`Please Enter a Number between ${min} and ${max}.`, "red");
  // Check if it is a winning number
  if (guess == winningNum) {
    gameOver("won", `${winningNum} is Correct!, YOU WIN!`, "green");
  } else {
    guessesLeft -= 1;
    if (guessesLeft == 0) {
      //   Game Over - Lost
      gameOver(
        "lost",
        `Game Over, YOU Lost! The correct number was ${winningNum}`,
        "red"
      );
    } else {
      //   Game continues - answer wrong
      gameOver(
        "continue",
        `${guess} is not correct, ${guessesLeft} guesses left.`,
        "red"
      );
      guessInput.value = "";
    }
  }
});

// Get Winning NUm
function getWinningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

// Set Message
function gameOver(won, msg, color) {
  message.textContent = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;

  if (won === "won" || won === "lost") {
    guessInput.disabled = true;
    guessButton.value = "Play Again";
    guessButton.className += "play-again";
  }
}
