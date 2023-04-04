import React from "react";
import { StyledPrice } from './styled';

function Price({ value }) {
  return <StyledPrice>{value} ₽</StyledPrice>;
}

export default Price;
