import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'prismjs/themes/prism.css';

import '@/assets/main.scss';
import App from '@/components/App';

const redirectForHTTPS = () => {
  if (REDIRECT_TO_HTTPS && window.location.protocol !== 'https:') {
    // hacky, ideally this should be an HTTP (301 ?) redirect
    window.location = 'https://' + window.location.host;
  } else {
    console.warn('Local dev still on http');
  }
}

const clearElementChildren = parentElement => {
  parentElement.innerHTML = '';
}

const mountReact = element => {
  ReactDOM.render(<App/>, element);
}

const init = () => {
  redirectForHTTPS();

  const appRoot = document.getElementById('root');
  clearElementChildren(appRoot);
  mountReact(appRoot);
};

init();
