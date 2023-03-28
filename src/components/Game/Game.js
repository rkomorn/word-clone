import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput/";

// Pick a random word on every pageload.
const answer = Array.from(sample(WORDS));
// To make debugging easier, we'll log the solution in the console.
console.info({ answer: answer.join("") });

function Game() {

  const [guesses, setGuesses] = React.useState(Array(NUM_OF_GUESSES_ALLOWED).fill(Array(5).fill(undefined)));
  const [guessCount, setGuessCount] = React.useState(0);

  function handleSubmitGuess(guess) {
    if (guessCount >= NUM_OF_GUESSES_ALLOWED) {
      throw new Error("Already guessed 6 times");
    }

    const nextGuesses = [...guesses];

    // Compute whether the answer is correct or not at the time a guess is entered instead of passing the answer all
    // the way down to each end component. I'm guessing the solution does the latter, so I'm just trying something
    // different.

    const guessChars = Array.from(guess);
    // Getting a bit hacky because checkGuess mutates answer
    nextGuesses[guessCount] = checkGuess(guessChars, [...answer]);

    setGuesses(nextGuesses);
    setGuessCount(guessCount + 1);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  )
    ;
}

export default Game;
