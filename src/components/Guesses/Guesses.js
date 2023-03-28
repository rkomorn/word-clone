import React from "react";

import Guess from "../Guess";

function Guesses({ guesses }) {
  return (
    <div>
      {guesses.map((guess, index) => <Guess key={index} guess={guess} />)}
    </div>
  );
}

export default Guesses;
