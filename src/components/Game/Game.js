import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput/";
import ResultBanner from "../ResultBanner";

// Pick a random word on every pageload.
const answer = Array.from(sample(WORDS));
// To make debugging easier, we'll log the solution in the console.
console.info({ answer: answer.join("") });

function Game() {

  const [guesses, setGuesses] = React.useState(Array(NUM_OF_GUESSES_ALLOWED).fill(Array(5).fill(undefined)));
  const [guessCount, setGuessCount] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("ongoing");

  function handleSubmitGuess(guess) {
    // Store the nextGuessCount so that we don't get bitten by the async nature of state updates
    const nextGuessCount = guessCount + 1;
    setGuessCount(nextGuessCount);

    const nextGuesses = [...guesses];

    // Compute whether the answer is correct or not at the time a guess is entered instead of passing the answer all
    // the way down to each end component. I'm guessing the solution does the latter, so I'm just trying something
    // different.

    // Note: spreading answer is a bit hacky, necessary because checkGuess mutates answer
    const checkedGuessChars = checkGuess(Array.from(guess), [...answer]);
    nextGuesses[guessCount] = checkedGuessChars;
    setGuesses(nextGuesses);

    // Pay the price for converting answer and guess word to arrays by checking the result to see if every guessed
    // character is correct (obviously, comparing the answer to the guess word would've been simpler at this point)
    // On the plus side, this is my first time using Array.every() , so the madness is not without purpose.
    if (checkedGuessChars.every(char => char.status === "correct")) {
      setGameStatus("won");
    } else if (nextGuessCount >= NUM_OF_GUESSES_ALLOWED) {
      // Dr. Marcus van Tautologist says: if this was our last guess, and we haven't won yet, then we have lost
      setGameStatus("lost");
    }
  }

  // Practice conditional rendering, but I think it makes sense not to instantiate the component if not necessary
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} isDisabled={gameStatus !== "ongoing"} />
      {gameStatus !== "ongoing" &&
        <ResultBanner gameStatus={gameStatus} guessCount={guessCount} answer={answer.join("")} />}
    </>
  )
    ;
}

export default Game;
