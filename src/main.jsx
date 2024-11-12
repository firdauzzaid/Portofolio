/**
 * @Copyright 2024 Znonymous
 * @license Apache 2-0
 */

/**
 * Node Modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Components
 */
import App from "./App.jsx";

/**
 * CSS Link
 */
import "./index.css";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
