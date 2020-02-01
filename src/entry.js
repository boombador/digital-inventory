import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "prismjs/themes/prism.css";
import { Provider } from "react-redux";

import "@/assets/main.scss";
import App from "@/components/App";
import store from "@/store.js";

const redirectForHTTPS = () => {
  if (REDIRECT_TO_HTTPS && window.location.protocol !== "https:") {
    // hacky, ideally this should be an HTTP (301 ?) redirect
    window.location = "https://" + window.location.host;
  } else {
    console.warn("Local dev still on http");
  }
};

const clearElementChildren = parentElement => {
  parentElement.innerHTML = "";
};

const mountReact = element => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    element
  );
};

const init = () => {
  redirectForHTTPS();

  const appRoot = document.getElementById("root");
  clearElementChildren(appRoot);
  mountReact(appRoot);
};

// https://redux.js.org/advanced/async-actions

init();
