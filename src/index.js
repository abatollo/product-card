import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { product } from "./mock";
import ProductPage from "./product-page/product-page";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ProductPage product={product} />
  </StrictMode>
);
