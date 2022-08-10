import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "./../../store/cart-contex";

const HeaderCartButton = ({ onClick }) => {
  const ctx = useContext(CartContext);
  const cartItemsCount = ctx.items.reduce((count, item) => {
    return count += item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
