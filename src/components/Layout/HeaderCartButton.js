import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "./../../store/cart-contex";

const HeaderCartButton = ({ onClick }) => {
  const ctx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);
    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 200);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, [items]);

  const cartItemsCount = items.reduce((count, item) => {
    return (count += item.amount);
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
