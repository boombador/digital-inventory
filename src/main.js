import 'normalize.css';
import 'prismjs/themes/prism.css';

import '@/assets/styles.scss';
import { samples, testMain } from '@/checking';

// reload https version of page if necessary
if (redirectToHTTPS && window.location.protocol !== 'https:') {
  // ideally this should be an HTTP (301 ?) redirect
  window.location = 'https://' + window.location.host;
}

const clearChildren = (parentElement) => {
  // removes the children from the DOM by redefining what
  // html is inside of the root element
  parentElement.innerHTML = '';
}

const addLoadedToElement = (parentElement) => {
  // instead of directly rewriting the DOM, this approach
  // uses the document api to create and add new elements
  // to the given element that will serve as parent
  const newDiv = document.createElement('div');
  newDiv.innerText = 'Page has loaded!';
  parentElement.appendChild(newDiv);
  return newDiv;
}

const initApp = () => {
  // a vanilla js approach to adding page html builds
  // the dom from the root node defined in our partial
  // `basic-body.html`
  const rootElement = document.getElementById('root');
  clearChildren(rootElement);
  const loadedDiv = addLoadedToElement(rootElement);

  // TODO: write app logic to construct the pages and add
  // interactivity here instead of this test code
  console.log(rootElement);
  console.log(loadedDiv);
  testMain();
}

initApp();
