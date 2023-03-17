import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import TokenSale from "./pages/TokenSale";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <TokenSale />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
