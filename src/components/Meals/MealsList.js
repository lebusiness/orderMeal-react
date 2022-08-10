import Card from "./../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./MealsList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Суши",
    description: "Лучшая рыба и овощи",
    price: 450,
  },
  {
    id: "m2",
    name: "Шницель",
    description: "Немецкое фирменное блюдо!",
    price: 490,
  },
  {
    id: "m3",
    name: "Бургер с барбекю",
    description: "Вкуснейший и сочный бургер",
    price: 360,
  },
  {
    id: "m4",
    name: "Рамен",
    description: "Японское блюдо с пшеничной лапшой",
    price: 340,
  },
];

const MealsList = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsList;
