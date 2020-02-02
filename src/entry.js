import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "purecss";

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

const registerWorker = (workerPath, handleSuccess, handleError) => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(workerPath)
        .then(registration => {
          console.log("SW registered: ", registration);
        })
        .catch(registrationError => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
};

const init = () => {
  redirectForHTTPS();
  registerWorker("/service-worker.js");

  const appRoot = document.getElementById("root");
  clearElementChildren(appRoot);
  mountReact(appRoot);
};

// https://redux.js.org/advanced/async-actions

init();
