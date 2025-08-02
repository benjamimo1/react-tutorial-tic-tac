import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// The bridge between the component you created in the App.js file and the web browser.

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App /> 
  </StrictMode>
);