import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Home from "@/components/Home";
import Balance from "@/components/Balance";

const App = () => (
  <Router>
    <Route path="/" component={Home} exact />
    <Route path="/balance" component={Balance} exact />
  </Router>
);

export default App;
