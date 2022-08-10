import { useContext } from "react";
import CartContext from "../../store/cart-contex";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = ({ onHideCart }) => {
  const ctx = useContext(CartContext);

  const hasItems = ctx.items.length > 0;
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1  })
  }
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id)
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Итоговый счет</span>
        <span>{ctx.totalAmount}₽</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Закрыть
        </button>
        {hasItems && <button className={classes["button"]}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Cart;
