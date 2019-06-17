import 'normalize.css';
import 'prismjs/themes/prism.css';

import '@/assets/styles.scss';
import { samples, testMain } from '@/checking';

if (redirectToHTTPS && window.location.protocol !== 'https:') {
  // hacky, ideally this should be an HTTP (301 ?) redirect
  window.location = 'https://' + window.location.host;
}

// This is the page root defined in our partial `basic-body.html`
const root = document.getElementById('root');
//console.log(root);

// removes the children from the DOM by redefining what html is inside of the
// root element (skipping because we'll define some contents instead)
//root.innerHTML = '';

// example of using template strings with `` for multiline strings
// and including html in the rewritten dom
root.innerHTML = `
  <div>
    Page has loaded!
  </div>
`;

// TODO: call app logic to construct the pages and add interactivity here
// currently just calling some sample code
testMain();
