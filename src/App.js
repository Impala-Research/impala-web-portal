import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="//">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
