import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Path direct us to the right page
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
