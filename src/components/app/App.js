import React from "react";
import "./App.css";
import NavBar from "../navbar/navbar.component";
import LoginRegisterBody from "../login-register-body/login-register-body.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WalletBody from "../wallet-page/wallet-body.component";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Route path="/" exact component={LoginRegisterBody}></Route>
        <Route path="/wallets" exact component={WalletBody}></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
