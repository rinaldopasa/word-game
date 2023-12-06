import { useState } from "react";
import type { GameStatus } from "./Game";

interface Props {
  handleSubmitGuess: (attemptGuess: string) => void;
  gameStatus: GameStatus;
}

export default function GuessInput({ handleSubmitGuess, gameStatus }: Props) {
  const [attemptGuess, setAttemptGuess] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (attemptGuess.length !== 5) return;

    handleSubmitGuess(attemptGuess);
    setAttemptGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess">Enter guess:</label>
      <input
        value={attemptGuess}
        onChange={(event) =>
          setAttemptGuess(event.currentTarget.value.toUpperCase())
        }
        id="guess"
        type="text"
        minLength={5}
        maxLength={5}
        required
        disabled={gameStatus !== "running"}
      />
    </form>
  );
}
