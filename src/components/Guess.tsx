import { range } from "../utils.ts";
import { checkGuess } from "../game-helpers.ts";

export default function Guess({
  value,
  answer,
}: {
  value: string;
  answer: string;
}) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : ""}
          status={result ? result[num].status : ""}
        />
      ))}
    </p>
  );
}

function Cell({ letter, status }: { letter: string; status: string }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}
