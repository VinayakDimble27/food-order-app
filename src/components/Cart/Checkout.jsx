
import { useRef, useState } from 'react';
import classes from './Checkout.module.css';


const isEmpty = value=> value.trim() !== '';

const isPostalCode = value => value.trim().length == 6;

const Checkout =(props) =>{
    const nameInputRef      = useRef();
    const streetInputRef    = useRef();
    const postalInputRef    = useRef();
    const cityInputRef      = useRef();

    const [formInputsValidity,setFormInputValidity ] =useState({
        name:true,
        street:true,
        city:true,
        postalCode:true
    });

    const confirmHandler = (event)=>{
        event.preventDefault();
            const enteredName = nameInputRef.current.value;
            const enteredStreet = streetInputRef.current.value;
            const enteredPostalCode = postalInputRef.current.value;
            const enteredCity = cityInputRef.current.value;
            
            const enteredNameIsValid = isEmpty(enteredName);
            const enteredStreetIsValid = isEmpty(enteredStreet);
            const enteredCityIsValid = isEmpty(enteredCity);
            const enteredPostalIsValid = isPostalCode(enteredPostalCode);

                
            setFormInputValidity({
                name:enteredNameIsValid,
                street:enteredStreetIsValid,
                city:enteredCityIsValid,
                postalCode:enteredPostalIsValid
            });

        
            const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;
                                
                                if(!formIsValid)
                                {  
                                    return; 
                                }

                                props.submitOrderHandler({name:enteredName,
                                street:enteredCity,
                                city:enteredCity,
                                postalCode:enteredPostalCode
                            });
                               

    }
    return <form className={classes.form}>
        <div className={`${classes.control} ${formInputsValidity.name ?'':classes.invalid}`}>
            <label>Your name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!formInputsValidity.name &&  <p>Please enter a valid name</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.street ?'':classes.invalid}`}>
            <label>Street</label>
            <input type="text" id="street" ref={streetInputRef} />
            {!formInputsValidity.street &&  <p>Please enter valid street </p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.postalCode ?'':classes.invalid}`}>
            <label>Postal code</label>
            <input type="number" id="postal" ref={postalInputRef} />
            {!formInputsValidity.postalCode &&  <p>Please enter valid postal (6 char long)</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.city ?'':classes.invalid}`}>
            <label>City</label>
            <input type="text" id="city" ref={cityInputRef} />
            {!formInputsValidity.city &&  <p>Please enter valid city</p>}
        </div>
        <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button onClick={confirmHandler} >Confirm</button>
        </div>
    </form>
}

export default Checkout;