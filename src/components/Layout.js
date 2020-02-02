import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>{APP_TITLE}</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/balance">Balance</Link>
      </li>
    </ul>
  </header>
);

const Layout = ({ children }) => (
  <React.Fragment>
    <div className="pure-u-1-5" style={{ height: 1 }}></div>
    <div className="pure-u-3-5">
      <Header />
      {children}
    </div>
    <div className="pure-u-1-5" style={{ height: 1 }}></div>
  </React.Fragment>
);

export default Layout;
