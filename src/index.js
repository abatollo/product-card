import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import App from "./app/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
