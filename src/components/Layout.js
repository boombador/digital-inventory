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
    <Header />
    {children}
  </React.Fragment>
);

export default Layout;
