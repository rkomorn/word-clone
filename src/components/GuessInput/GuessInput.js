import React from "react";

const GuessInput = () => {
  const [guess, setGuess] = React.useState("");
  return (
    <form className="guess-input-wrapper"
          onSubmit={(event) => {
            event.preventDefault();
            console.log("guess:", guess);
            setGuess("");
          }
          }>
      <label htmlFor="guess-input">Enter guess:</label>
      <input required={true} maxLength="5" minLength="5" id="guess-input" pattern="[A-Za-z]{5}" value={guess}
             onChange={event => setGuess(event.target.value.toUpperCase())}></input>
    </form>
  );
};

export default GuessInput;