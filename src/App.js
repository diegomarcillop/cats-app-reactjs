import React from "react";
import "./App.css";
import CatData from "./container/catdata";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/:page?">
          <NavBar />
          <CatData />
        </Route>

        <br />
      </Router>
    </div>
  );
}

export default App;
