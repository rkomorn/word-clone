import React from "react";

function Guess({ guess, guessIndex }) {

  return (
    <p className="guess">
      {guess.map((letter, index) => {
        // Getting some optional chaining practice in.
        const cellClass = letter ? `cell ${letter.status}` : "cell";
        return <span className={cellClass} key={`${guessIndex}-${index}`}>{letter?.letter}</span>;
      })}
    </p>
  );
}

export default Guess;
