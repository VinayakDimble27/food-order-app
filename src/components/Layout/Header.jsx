
import MealImage from '../../assets/meals.jpg';
import  classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) =>{
  return <>
  <header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton onClick={props.showModalHandler}/>
  </header>
  <div className={classes['main-image']}>
    <img src={MealImage} alt="A table full of delicious food!"/>
  </div>
  </>
}
export default Header;