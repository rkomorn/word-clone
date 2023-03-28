import React from "react";

function ResultBanner({ gameStatus, guessCount, answer }) {

  if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
  }

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guessCount} guesses</strong>.
      </p>
    </div>
  );
}

export default ResultBanner;
