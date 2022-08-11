import { useContext, useState } from "react";
import CartContext from "../../store/cart-contex";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = ({ onHideCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const ctx = useContext(CartContext);

  const hasItems = ctx.items.length > 0;
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const sumbitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://ordermeal-c0474-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: ctx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    ctx.clearCart();
  };

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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onHideCart}>
        Закрыть
      </button>
      {hasItems && (
        <button className={classes["button"]} onClick={orderHandler}>
          Заказать
        </button>
      )}
    </div>
  );

  const isSubmittingContent = (
    <div className={classes["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  const didSubmitContent = (
    <>
      <p>Заказ оформлен, через несколько минут с вами свяжуться.</p>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={onHideCart}>
          Закрыть
        </button>
      </div>
    </>
  );
  return (
    <Modal onHideCart={onHideCart}>
      {/* Корзина */}
      {!isSubmitting && !didSubmit && (
        <>
          {cartItems}
          <div className={classes.total}>
            <span>Итоговый счет</span>
            <span>{ctx.totalAmount}₽</span>
          </div>
          {isCheckout && (
            <Checkout
              onSumbitOrder={sumbitOrderHandler}
              onCancel={onHideCart}
            />
          )}
          {!isCheckout && modalActions}
        </>
      )}
      {/* Отправка данных */}
      {isSubmitting && isSubmittingContent}
      {/* Отправка данных прошла успешно */}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
