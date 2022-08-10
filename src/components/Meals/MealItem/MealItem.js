import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ name, description, price, id }) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{price}₽</span>
      </div>
      <div>
        <MealItemForm id={id}/>
      </div>
    </li>
  );
};

export default MealItem;
