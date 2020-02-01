import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Home from "@/components/Home";

const App = () => (
  <Router>
    <Route path="/" component={Home} exact />
  </Router>
);

export default App;
