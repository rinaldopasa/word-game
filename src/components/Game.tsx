import { useState } from "react";
import { WORDS } from "../data.ts";
import { sample } from "../utils.ts";
import GuessInput from "./GuessInput.tsx";
import GuessResult from "./GuessResult.tsx";
import WonBanner from "./WonBanner.tsx";
import LostBanner from "./LostBanner.tsx";

export const NUM_OF_GUESSES_ALLOWED = 6;

// Pick a random word on every page load
const answer = sample(WORDS);
// To make debugging easier, I'll log the solution to the console.
console.log({ answer });

export type GameStatus = "running" | "won" | "lost";
export default function Game() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("running");
  const [guesses, setGuesses] = useState<string[]>([]);

  function handleSubmitGuess(attemptGuess: string) {
    const nextGuess = [...guesses, attemptGuess];
    setGuesses(nextGuess);

    if (attemptGuess === answer) {
      setGameStatus("won");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}
