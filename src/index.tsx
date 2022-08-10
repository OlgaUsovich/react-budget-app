import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CurrencyProvider, ExpensesProvider } from "./context";
import { GlobalStyle } from "./ui/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <CurrencyProvider>
      <ExpensesProvider>
        <App />
      </ExpensesProvider>
    </CurrencyProvider>
  </React.StrictMode>
);
