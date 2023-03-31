import React from "react";
import Title from "./title";
import Code from "./code";
import Gallery from "./gallery";
import Price from "./price";
import OldPrice from "./old-price";
import Counter from "./counter";
import Description from "./description";

function ProductPage({ product }) {
  return (
    <section>
      <Title>{ product.name }</Title>
      <Code>{ product.code }</Code>
      <div style={{ display: "flex" }}>
        <Gallery />
        <div>
          <p>
            Цена: <OldPrice /> <Price />
          </p>
          <div>
            Количество: <Counter />
          </div>
          <p>
            <span>Доставка:</span> 1 апреля
          </p>
          <button type="button">Купить</button>
        </div>
      </div>
      <Description />
    </section>
  );
}

export default ProductPage;
