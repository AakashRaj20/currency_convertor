import CurrencyValue from "./components/CurrencyValue";
import CurrencyConv from "./components/CurrencyConv";
import { CurrencyProvider } from "./components/CurrencyContext";
import "./App.css";

function App() {
  return (
    <CurrencyProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 my-24">
        <CurrencyValue />
        <CurrencyConv />
      </div>
    </CurrencyProvider>
  );
}

export default App;
