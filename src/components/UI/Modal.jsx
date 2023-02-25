
import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReacDOM, { createPortal } from 'react-dom';
import cartContext from '../../store/cart-context';

const BackDrops  =(props) =>{
    const cartModalContext = React.useContext(cartContext);
return <div className={classes.backdrop} onClick={props.onClick}></div>
}


const ModalOverlay  =(props) =>{
    return <div className={classes.modal}>
        <div className={classes.content}>
                    {props.children}
        </div>
    </div>
}
const portalElement =document.getElementById('overlays');
const Modal =(props) =>{
return <Fragment>
    {ReacDOM.createPortal(<BackDrops onClick={props.hideModalHandler}/>,portalElement)}
   {ReacDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
   
</Fragment>
}
export default Modal;