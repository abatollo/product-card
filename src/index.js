import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { product } from "./mock";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import ProductPage from "./product-page/product-page";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ProductPage product={product} />
    </ThemeProvider>
  </StrictMode>
);
