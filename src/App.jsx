import Header from "./components/Header";
import PlayGround from "./components/PlayGround";
import RulesButton from "./components/RulesButton";
import { RulesModal } from "./components/RulesModal";

function App() {
  return (
    <div className="app__container">
      <Header />
      <PlayGround />
      <RulesButton />
      <RulesModal />
    </div>
  );
}

export default App;
