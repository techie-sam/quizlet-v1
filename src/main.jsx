import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router-dom";
import Routes from "./AppRoutes";
import AuthContextProvider from "./contexts/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <Routes />
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
