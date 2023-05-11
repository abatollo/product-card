import React from "react";
import Title from "../title/title";
import Code from "../code/code";
import Description from "../description/description";
import Comments from "../comments/comments";
import Popularity from "../popularity/popularity";
import { Image } from "../elements";
import Tabs from "../tabs/tabs";
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageCounter,
  BuyButton,
  PageFullPrice,
  DeliveryValue
} from "./styled";

function ProductPage({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: <Description text={product.description} />
    },
    {
      title: "Комментарии",
      content: <Comments comments={product.comments} />
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Code>{product.code}</Code>
      </Header>
      <ProductWrapper>
        <Image
          width="200"
          height="257"
          maxWidth="200"
          src={product.src}
          alt={product.name}
        />
        <ProductInfo>
          <ProductInfoLine>
            Цена:{" "}
            <PageFullPrice oldPrice={product.oldPrice} price={product.price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество: <PageCounter />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton
            size="large"
            onClick={() => console.log("открытие окна оформления заказа")}
          >
            Купить
          </BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      <Tabs tabs={tabs} />
    </StyledProductPage>
  );
}

export default ProductPage;
