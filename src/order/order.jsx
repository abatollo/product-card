import React from "react";
import Button from "../button/button";
import { Label } from "./styled";

function Order() {
  return (
    <form>
      <Label>
        Имя: <input />
      </Label>
      <Label>
        Телефон: <input type="tel" />
      </Label>
      <Label>
        Адрес доставки: <input />
      </Label>
      <Button>Оформить</Button>
    </form>
  );
}

export default Order;
