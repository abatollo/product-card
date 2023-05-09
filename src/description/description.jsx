import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text }) {
  return (
    <>
      {text}
      <DescriptionButton
        onClick={() => console.log("скрытие/открытие всего текста")}
      >
        Подробнее
      </DescriptionButton>
    </>
  );
}

export default Description;
