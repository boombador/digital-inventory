import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'prismjs/themes/prism.css';

import '@/assets/main.scss';
import App from '@/components/App';

if (redirectToHTTPS && window.location.protocol !== 'https:') {
  // hacky, ideally this should be an HTTP (301 ?) redirect
  window.location = 'https://' + window.location.host;
}

const mountReactOnPage = () => {
  // Render the HTML overlay that is meant to blend with the graphics
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )
}

mountReactOnPage();

