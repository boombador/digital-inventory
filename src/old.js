// main

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


// checking
export const samples = [
  { amount: 10, category: 'loans', description: 'jimmy helped me out' },
  { amount: -5.50, category: 'food', description: 'delicious sandwich' },
  { amount: -3.55, category: 'loans', description: 'gallon of gasoline' },
  { amount: -10, category: 'loans', description: 'paid jimmy back' },
];

export function testMain() {
  console.log('Printing checking samples:', samples);
}
