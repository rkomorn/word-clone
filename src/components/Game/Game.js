import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Guesses from "../Guesses";
import GuessInput from "../GuessInput/";

// Pick a random word on every pageload.
const answer = Array.from(sample(WORDS));
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState(Array(5).fill(Array(5).fill("")));
  const [guessCount, setGuessCount] = React.useState(0);

  function handleGuess(guess) {
    if (guessCount >= 5) {
      throw new Error("Already guessed 5 times");
    }

    const nextGuesses = [...guesses];
    nextGuesses[guessCount] = Array.from(guess);

    setGuesses(nextGuesses);
    setGuessCount(guessCount + 1);
  }

  return (
    <><Guesses guesses={guesses} /><GuessInput handleGuess={handleGuess} /></>
  )
    ;
}

export default Game;
