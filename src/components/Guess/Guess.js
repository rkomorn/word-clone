import React from "react";

function Guess({ guess, guessIndex }) {
  return (
    <p className="guess">
      {guess.map((letter, index) => <span className="cell" key={`${guessIndex}-${index}`}>{letter}</span>)}
    </p>
  );
}

export default Guess;
