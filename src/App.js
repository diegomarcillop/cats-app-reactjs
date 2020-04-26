import React from "react";
import "./App.css";
import CatData from "./container/catdata";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CatData />
      <br/>
    </div>
  );
}

export default App;
