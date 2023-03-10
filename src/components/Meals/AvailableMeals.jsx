import React, { useEffect } from 'react';
import { getMeals } from '../../services/meal';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
  
const AvailableMeals = ()=>{

  const [mealsList,setMealsList] = React.useState([]);
  const [isLoading,setIsLoading] =React.useState(true);

useEffect(()=>{
  async function fetchData(){
    const data = await getMeals();
    setMealsList(data);
    setIsLoading(false);
  }
  fetchData();

},[]);

if(isLoading)
{
  return <section className={classes.mealsloader}><span>Loading...</span></section>
}
const mealsListHTML =  mealsList?.map(meal=><MealItem id={meal.id}  key={meal.id}  meal={meal}/>);
return <section className={classes.meals}>
{
  <Card>
  <ul>
    {mealsListHTML}
    </ul>
    </Card>
}
</section>
}
export default AvailableMeals;