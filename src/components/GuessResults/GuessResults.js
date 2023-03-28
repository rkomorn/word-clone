import React from "react";

import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div>
      {guesses.map((guess, index) => <Guess key={index} guess={guess} />)}
    </div>
  );
}

export default GuessResults;
