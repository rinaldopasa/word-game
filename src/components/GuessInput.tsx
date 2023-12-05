import { useState } from "react";

interface Props {
  handleSubmitGuess: (attemptGuess: string) => void;
}
export default function GuessInput({ handleSubmitGuess }: Props) {
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
        onChange={(event) => setAttemptGuess(event.target.value.toUpperCase())}
        id="guess"
        type="text"
        minLength={5}
        maxLength={5}
        required
      />
    </form>
  );
}
