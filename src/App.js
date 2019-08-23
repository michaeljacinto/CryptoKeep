import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUser from "./components/createUserComponent";
import NavBar from "./components/navbarComponent";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Route path="/" exact component={CreateUser} />
        {/* <Route path="/add" exact component={CreateUser} /> */}
      </div>
    </Router>
  );
}

export default App;
