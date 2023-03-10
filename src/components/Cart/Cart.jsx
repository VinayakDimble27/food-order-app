import React from 'react';
import { postUserData } from '../../services/meal';
import cartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';
const Cart = (props) =>{
  
const [isCheckout,setIsCheckout] =React.useState(false);

const [didSumbitting,setDidSubmitting] =React.useState(false);
const cartCtx= React.useContext(cartContext);


const totalAmount = cartCtx.totalAmount.toFixed(2);

const cartItemRemoveHandler = (id)=>{
    cartCtx.removeItem(id);
}

const cartItemAddHandler = (item)=>{
cartCtx.addItem(item);
} 

const hasItems = cartCtx.items.length>0;
const cartItems =<ul className={classes['cart-items']}>{cartCtx.items.map((item)=><CartItem key={item.id} name={item.name} amount ={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}>{item.name}</CartItem>)}</ul>;


const orderHandler =() =>{
    setIsCheckout(true);
}

const submitOrderHandler= async (userData)=>{
    
const res = await postUserData({user:userData,orderedItems:cartCtx.items});
    console.log(res);
    if(res=="201"){
        setDidSubmitting(true);
        cartCtx.clearCart();
    }

}

const showOrderCompletedModal = <section className={classes.actions}> <button className={classes['button-alt']} onClick={props.hideModalHandler}>Close</button></section>;

return <Modal hideModalHandler={props.hideModalHandler}>
 {
    !didSumbitting && <>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
    </div>
    {!isCheckout && <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.hideModalHandler}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>}
   {isCheckout && <Checkout submitOrderHandler={submitOrderHandler} onCancel={props.hideModalHandler}/>}
    </>
 }
    
  
 { didSumbitting &&  showOrderCompletedModal}
</Modal>

}
export default Cart;