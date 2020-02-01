import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'prismjs/themes/prism.css';

import '@/assets/main.scss';
import App from '@/components/App';

const redirectForHTTPS = () => {
  if (redirectToHTTPS && window.location.protocol !== 'https:') {
    // hacky, ideally this should be an HTTP (301 ?) redirect
    window.location = 'https://' + window.location.host;
  }
}

const clearElementChildren = parentElement => {
  parentElement.innerHTML = '';
}

const mountReact = element => {
  ReactDOM.render(<App/>, element));
}

const init = () => {
  redirectForHTTPS();

  const appRoot = document.getElementById('root');
  clearElementChildren(appRoot);
  mountReactOnPage(appRoot);
};

init();
