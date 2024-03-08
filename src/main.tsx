import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyles";
import App from "./App";

import { AuthProvider } from "./lib/context/requests";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>
);
