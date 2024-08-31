import React, { useState } from "react";

function GuessingGame() {
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [remainingAttempts, setRemainingAttempts] = useState(5);
  const [message, setMessage] = useState("");

  const handleCheckGuess = () => {
    const guessedNumber = parseInt(document.getElementById("guessInput").value);

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      setMessage("Enter a valid number between 1 and 100.");
      return;
    }

    setRemainingAttempts((prev) => prev - 1);

    if (guessedNumber === targetNumber) {
      setMessage("Well done! You've guessed the number!");
    } else if (guessedNumber < targetNumber) {
      setMessage("Your guess is lower than the target.");
    } else {
      setMessage("Your guess is higher than the target.");
    }

    if (remainingAttempts === 1) {
      setMessage((prevMessage) => 
        `${prevMessage} Game over! The correct number was ${targetNumber}.`
      );
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setRemainingAttempts(5);
    setMessage("");
    document.getElementById("guessInput").value = "";
  };

  return (
    <div className="game-container">
      <h1>Guess a number from 1 to 100</h1>
      <p id="feedback">{message}</p>
      <input type="number" id="guessInput" min="1" max="100"  />
      <button onClick={handleCheckGuess} disabled={remainingAttempts === 0}>
        Check
      </button>
      <br/>
      <br/>
      <button onClick={resetGame}>Restart Game</button>
      <p id="attemptsLeft">Remaining attempts: {remainingAttempts}</p>
    </div>
  );
}

export default GuessingGame;
