import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput/";

// Pick a random word on every pageload.
const answer = Array.from(sample(WORDS));
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState(Array(NUM_OF_GUESSES_ALLOWED).fill(Array(5).fill("")));
  const [guessCount, setGuessCount] = React.useState(0);

  function handleSubmitGuess(guess) {
    if (guessCount >= 6) {
      throw new Error("Already guessed 6 times");
    }

    const nextGuesses = [...guesses];
    nextGuesses[guessCount] = Array.from(guess);

    setGuesses(nextGuesses);
    setGuessCount(guessCount + 1);
  }

  return (
    <><GuessResults guesses={guesses} /><GuessInput handleSubmitGuess={handleSubmitGuess} /></>
  )
    ;
}

export default Game;
