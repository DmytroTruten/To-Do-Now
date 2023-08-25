import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App/App.css";
import { ThemeArea } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeArea>
      <App />
    </ThemeArea>
  </React.StrictMode>
);
