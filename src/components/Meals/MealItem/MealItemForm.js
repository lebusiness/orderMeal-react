import { useRef } from "react";
import Input from "./../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart, amount }) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber.length === 0
    ) {
      return;
    }
    onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Количество"
        input={{
          id: `amount_${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Добавить</button>
      <p>Добавлено: {amount}шт.</p>
    </form>
  );
};

export default MealItemForm;
