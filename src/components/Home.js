import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">
      <h1>{APP_TITLE}</h1>
    </Link>
    {APP_SUBTITLE && (
      <p>{APP_SUBTITLE}</p>
    )}
  </header>
);

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

const Home = () => (
  <Layout>
    <div>Home page goes here!</div>
  </Layout>
);

export default Home;
