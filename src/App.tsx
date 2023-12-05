import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="game-wrapper">
        <Game />
      </main>
    </div>
  );
}

export default App;
