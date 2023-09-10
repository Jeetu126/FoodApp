import Card from "../UI/Card";
import MealItem from "./Mealitem/MealIteam";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich tomato and butter sauce.",
    price: 299,
  },
  {
    id: "m2",
    name: "Biryani",
    description:
      "Fragrant rice dish with spices and your choice of meat or vegetables.",
    price: 249,
  },
  {
    id: "m3",
    name: "Paneer Tikka",
    description: "Marinated and grilled cottage cheese cubes with spices.",
    price: 199,
  },
  {
    id: "m4",
    name: "Masala Dosa",
    description: "Crispy South Indian crepe filled with spiced potato mixture.",
    price: 149,
  },
  {
    id: "m5",
    name: "Chole Bhature",
    description: "Fried bread with spicy chickpea curry.",
    price: 179,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
