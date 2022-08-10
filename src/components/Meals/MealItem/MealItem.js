import { useContext } from "react";
import CartContext from "../../../store/cart-contex";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = ({ name, description, price, id }) => {
  const ctx = useContext(CartContext);
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
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
