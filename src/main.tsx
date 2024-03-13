import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyles";
import App from "./App";

import { AuthProvider } from "./context/getRequestControls";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>
);
