import React from "react";
import Button from "../button/button";
import { StyledCounter, Value } from "./styled";

function Counter({ className }) {
  return (
    <StyledCounter className={className}>
      <Button
        size="small"
        onClick={() => console.log("уменьшение счётчика на 1")}
      >
        -
      </Button>
      <Value>1</Value>
      <Button
        size="small"
        onClick={() => console.log("увеличение счётчика на 1")}
      >
        +
      </Button>
    </StyledCounter>
  );
}

export default Counter;
