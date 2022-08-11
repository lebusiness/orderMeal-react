import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const Checkout = ({ onCancel, onSumbitOrder }) => {
  const [formInputValidity, setFormInputValidity] = useState({
    address: true,
    number: true,
  });
  const addressInputRef = useRef();
  const numberInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredAddress = addressInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;

    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredNumberIsValid = !isEmpty(enteredNumber);
    const formIsValid = enteredAddressIsValid && enteredNumberIsValid;
    setFormInputValidity({
      address: enteredAddressIsValid,
      number: enteredNumberIsValid,
    });
    if (!formIsValid) {
      return;
    }
    onSumbitOrder({
      address: enteredAddress,
      number: enteredNumber,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputValidity.address ? classes.invalid : ""
        }`}
      >
        <label htmlFor="address">Адрес</label>
        <input
          type="text"
          id="address"
          ref={addressInputRef}
          placeholder="Moscow, 129090"
        />
        {!formInputValidity.address && (
          <p className={classes["invalid-inp"]} placeholder="Moscow, 129090">
            Введите адрес
          </p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.number ? classes.invalid : ""
        }`}
      >
        <label htmlFor="number">Номер телефона</label>
        <input type="text" id="number" ref={numberInputRef} placeholder="89655543990"/>
        {!formInputValidity.number && (
          <p className={classes["invalid-inp"]}>Введите номер</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Отмена
        </button>
        <button className={classes.submit}>Подтвердить</button>
      </div>
    </form>
  );
};

export default Checkout;
