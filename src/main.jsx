import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { PrivyProvider } from "@privy-io/react-auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <PrivyProvider appId="">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </PrivyProvider>
);
