
import React from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props)=>{
const amountInputRef = React.useRef();
const [amountIsValid,setamountIsValid] =React.useState(true);
   const submitHandler = (event)=>{
      event.preventDefault();
 const enteredAmount = amountInputRef.current.value;
 const entertedAmountNumber = +enteredAmount;
 
 if(enteredAmount.trim().length ===0 || entertedAmountNumber < 1 || entertedAmountNumber > 5 )
 {
   setamountIsValid(false);
 }

 props.onAddToCart(entertedAmountNumber);

   };

return (
<form className={classes.form} onSubmit={submitHandler}>
   <Input 
   ref={amountInputRef}
   label="Amount" input={{
      id: 'amount_' + props.id,
    type:'Number',
    min:'1',
    max:'5',
    step:'1',
    defaultValue:'1'
   }} />
    <button> + Add</button>
    {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
</form>
)
}
export default MealItemForm;