import Banner from "./Banner";

export default function LostBanner({ answer }: { answer: string }) {
  return (
    <Banner status="sad">
      <p>
        <strong>Sorry!</strong> The correct word was <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}
