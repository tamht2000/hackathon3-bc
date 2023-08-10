import React from "react";
import CartItem from "./CartItem";

function CartList(props) {
  const { carts, onClickRemove, onClickIcrement, cartDownItemOnclick } = props;
  console.log(carts);

  return (
    <div className="cart-list">
      {carts.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          onClickRemove={onClickRemove}
          onClickIcrement={onClickIcrement}
          cartDownItemOnclick={cartDownItemOnclick}
        />
      ))}
    </div>
  );
}

export default CartList;
