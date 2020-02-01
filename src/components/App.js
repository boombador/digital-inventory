import React from 'react';
import styled from 'styled-components';
import {
  HashRouter as Router,
  Route,
  Link
} from "react-router-dom";

const Home = () => (
  <div> home page</div>
);

export default ({ children }) => (
  <Router>
    <div id="react-app" className="container">
      <header>
        <h1><Link to="/">projective mindspace</Link></h1>
        <p>a digital piece of my mind</p>
      </header>
        <Route path="/" component={Home} exact />
    </div>
  </Router>
);
