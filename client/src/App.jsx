import { EthProvider } from './contexts/EthContext';
import TokenSale from './pages/TokenSale';

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
