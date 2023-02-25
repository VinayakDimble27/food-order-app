import React from 'react';
import cartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) =>{
const {name,description,price} =props.meal;
const cartctx = React.useContext(cartContext);

const addToCartHandler =(amount)=>{
    cartctx.addItem({
        id:props.id,
        name:name,
        amount:amount,
        price:price
    });
}

    return <li className={classes.meal}>
        <div>
        <div>
        <h3>{name}</h3>
        </div>
        <div className={classes.description}>
            {description}
        </div>
        <div className={classes.price}>${price.toFixed(2)}</div>
       
        </div>
        <div>
           <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
}
export default MealItem;