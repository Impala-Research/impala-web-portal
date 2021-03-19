import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Features from "./Components/Features/Features";
import PlansAndPricing from "./Components/PlansAndPricing/PlansAndPricing";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container disableGutters={true} maxWidth={false}>
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
      </Container>
    </div>
  );
}

export default App;
