import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { MembershipProvider } from "./context/MembershipContext";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MembershipProvider>
          <App />
        </MembershipProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
