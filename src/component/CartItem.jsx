import React from "react";

function CartItem(props) {
  const { cartItem, onClickRemove, onClickIcrement, cartDownItemOnclick } =
    props;
  const handcleClickRemove = (id) => {
    onClickRemove(id);
  };
  const handcleUp = (cartItem) => {
    onClickIcrement(cartItem);
  };
  const handleDown = (cartItem) => {
    cartDownItemOnclick(cartItem);
  };
  return (
    <article className="cart-item">
      <img src={cartItem.image} alt="" />
      <div className="cart-name">
        <h4>{cartItem.title}</h4>
        <h4 className="item-price">{cartItem.price}$</h4>
        <button onClick={() => handcleClickRemove(cartItem.id)} className="btn">
          remove
        </button>
      </div>
      <div className="cart-amount">
        <button onClick={() => handcleUp(cartItem)} className="amount-btn">
          Add
        </button>

        <p className="amount">{cartItem.amount}</p>

        <button
          className="amount-btn"
          onClick={() => handleDown(cartItem)}
          disabled={cartItem.amount <= 1}
        >
          Down
        </button>
      </div>
    </article>
  );
}

export default CartItem;
