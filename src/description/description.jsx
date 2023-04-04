import React from "react";
import Button from "../button/button";

function Description({ text }) {
  return (
    <div>
      <h2>Описание</h2>
      {text}
      <Button>Подробнее</Button>
    </div>
  );
}

export default Description;
