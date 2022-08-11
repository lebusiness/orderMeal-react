import { useEffect, useState } from "react";
import Card from "./../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./MealsList.module.css";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [httpEror, setHttpEror] = useState(null);

  useEffect(() => {
    const featchMeals = async () => {
      const response = await fetch(
        "https://ordermeal-c0474-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if(!response.ok) {
        throw new Error('Что-то пошло не так...');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };

    featchMeals().catch(error => {
      setHttpEror(error.message);
    })
    
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (httpEror) {
    return <p className={classes.error}>{httpEror}</p>
  }
  return (
    <>
      {meals.length === 0 && (
        <div class={classes['lds-ring']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {meals.length !== 0 && (
        <section className={classes.meals}>
          <Card>
            <ul>{mealsList}</ul>
          </Card>
        </section>
      )}
    </>
  );
};

export default MealsList;
