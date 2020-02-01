import React from 'react';

const Header = () => (
  <header>
    <h1><Link to="/">{APP_TITLE}</Link></h1>
    <p>{APP_SUBTITLE}</p>
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
  </Layout
);
