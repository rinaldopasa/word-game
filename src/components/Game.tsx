import { sample } from "../utils.ts";
import { WORDS } from "../data.ts";
import GuessInput from "./GuessInput.tsx";
import GuessResult from "./GuessResult.tsx";
import { useState } from "react";

// Pick a random word on every page load
const answer = sample(WORDS);
// To make debugging easier, I'll log the solution to the console.
console.log({ answer });

export default function Game() {
  const [guesses, setGuesses] = useState<string[]>([]);

  function handleSubmitGuess(attemptGuess: string) {
    setGuesses([...guesses, attemptGuess]);
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}
