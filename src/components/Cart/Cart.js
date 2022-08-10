import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Суши", amount: "2", price: 450 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Итоговый счет</span>
        <span>900₽</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Закрыть</button>
        <button className={classes["button"]}>Заказать</button>
      </div>
    </Modal>
  );
};

export default Cart;
