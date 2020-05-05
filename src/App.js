import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import { GlobalStyles } from "./components/Common/GlobalStyled";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InfoBreed from "./container/InfoBreed";
import Breeds from "./container/Breeds";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider
          theme={{
            fontFamily: "Roboto, sans-serif",
          }}
        >
          <NavBar />
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/breeds" exact>
            <Breeds />
          </Route>

          <Route path="/info/:id" exact>
            <InfoBreed />
          </Route>

          <GlobalStyles primaryColor />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
