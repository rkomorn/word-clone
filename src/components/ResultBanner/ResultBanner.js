import React from "react";

const ResultBanner = ({ gameStatus, guessCount, answer }) => {
  return gameStatus === "lost" ? <LostBanner answer={answer} /> : <WonBanner guessCount={guessCount} />;
};

const Banner = ({ bannerStatus, children }) => {
  return (
    <div className={`${bannerStatus} banner`}>{children}</div>
  );
};
const WonBanner = ({ guessCount }) => {
  return (
    <Banner bannerStatus="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guessCount} guesses</strong>.
      </p>
    </Banner>
  );
};

const LostBanner = ({ answer }) => {
  return (
    <Banner bannerStatus="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};

export default ResultBanner;