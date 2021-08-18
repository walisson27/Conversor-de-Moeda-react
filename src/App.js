import "./App.css";
import Conversor from "./components/Conversor";

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <hr></hr>
      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <hr></hr>
      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
      <hr></hr>
      <div className="linha">
        <Conversor moedaA="GBP" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="GBP"></Conversor>
      </div>
      <hr></hr>
      <div className="linha">
        <Conversor moedaA="JPY" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="JPY"></Conversor>
      </div>
      <hr></hr>
      <div className="linha">
        <Conversor moedaA="BTC" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="BTC"></Conversor>
      </div>
    </div>
  );
}

export default App;
