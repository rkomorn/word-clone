import React from "react";

const GuessInput = ({ handleGuess }) => {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    handleGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper"
          onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" title="5 letter word" required minLength={5} maxLength={5} pattern="[A-Za-z]{5}"
             type="text"
             value={guess}
             onChange={event => setGuess(event.target.value.toUpperCase())}></input>
    </form>
  );
};

export default GuessInput;