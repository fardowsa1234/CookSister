import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from the correct path
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
