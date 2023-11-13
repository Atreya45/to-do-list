import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root") || document.createElement("div");
document.body.appendChild(root);

const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
