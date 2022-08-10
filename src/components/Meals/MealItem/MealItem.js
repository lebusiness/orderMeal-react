import { useContext } from "react";
import CartContext from "../../../store/cart-contex";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = ({ name, description, price, id }) => {
  const ctx = useContext(CartContext);

  const current = ctx.items.findIndex((item) => item.id === id);
  const amountInCart = ctx.items[current]?.amount ?? 0;
  const addToCartHandler = (amount) => {
    ctx.addItem({
      key: id,
      id,
      name,
      amount,
      price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{price}₽</span>
      </div>
      <MealItemForm
        id={id}
        onAddToCart={addToCartHandler}
        amount={amountInCart}
      />
    </li>
  );
};

export default MealItem;
