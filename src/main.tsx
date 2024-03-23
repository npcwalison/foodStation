import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyles";
import App from "./App";

import { RequestProvider } from "./context/getRequestControls";
import { RegisterProvider } from "./context/getFormData";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RegisterProvider>
      <RequestProvider>
        <GlobalStyle />
        <App />
      </RequestProvider>
    </RegisterProvider>
  </React.StrictMode>
);
