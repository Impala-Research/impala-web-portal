import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
