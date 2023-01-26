import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GeneralContext from "./Context/GeneralContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralContext>
      <App />
    </GeneralContext>
  </React.StrictMode>
);
