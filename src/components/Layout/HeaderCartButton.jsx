
import React, { useEffect } from 'react';
import cartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) =>{
  const [btnIsHighlighted,setBtnIsHighlighted] = React.useState(false);
const cartCtx = React.useContext(cartContext);

const numberOfCartItems = cartCtx.items.reduce((acc,i)=>{
  return acc+ i.amount;
},0);

const {items } = cartCtx;

const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump:''}`;
 

useEffect(()=>{
  if(items.length===0){
    return;
  }
  setBtnIsHighlighted(true);

  const timer = setTimeout(()=>{
    setBtnIsHighlighted(false);
  },300);


  return ()=>{
    clearTimeout(timer);
  }
},[items]);

    return <>
    <button className={btnClasses} onClick={props.onClick}>
       <span className={classes.icon}>
       <CartIcon/>
        </span>   
        <span>Your Cart</span>    
       <span className={classes.badge}>{numberOfCartItems}</span>     
    </button>
    </>
}
export default HeaderCartButton;