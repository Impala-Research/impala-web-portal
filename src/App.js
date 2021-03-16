import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Features from "./Components/Features/Features";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import PlansAndPricing from "./Components/PlansAndPricing/PlansAndPricing";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Features" component={Features} />
          <Route path="/Plans-Pricing" component={PlansAndPricing} />
          <Route path="/Team" component={Team} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
