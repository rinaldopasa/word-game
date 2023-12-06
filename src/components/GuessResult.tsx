import Guess from "./Guess";
import { range } from "../utils.ts";
import { NUM_OF_GUESSES_ALLOWED } from "./Game";

interface GuessResult {
  guesses: string[];
  answer: string;
}
// TODO: Avoid prop drilling.
export default function GuessResult({ guesses, answer }: GuessResult) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}
