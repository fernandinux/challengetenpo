import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import FreqOper from "./components/freqOper";
import Recarga from "./components/recarga";
import RechargeSuccess from "./components/rechargesuccess";
import Misgastos from "./components/misgastos";
import DetailAccount from "./components/detailaccount";
import NewRecargar from "./components/newrecarga";
import Operadores from "./components/operadores";
import RegRecarga from "./components/regrecarga";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/freqoper" exact>
          <FreqOper />
        </Route>
        <Route path="/recarga" exact>
          <Recarga />
        </Route>
        <Route path="/rechargesuccess" exact>
          <RechargeSuccess />
        </Route>
        <Route path="/misgastos" exact>
          <Misgastos />
        </Route>
        <Route path="/detailaccount" exact>
          <DetailAccount />
        </Route>
        <Route path="/newrecarga" exact>
          <NewRecargar />
        </Route>
        <Route path="/operadores" exact>
          <Operadores />
        </Route>
        <Route path="/regrecarga" exact>
          <RegRecarga />
        </Route>
      </div>
    </Router>
  );
}

export default App;
