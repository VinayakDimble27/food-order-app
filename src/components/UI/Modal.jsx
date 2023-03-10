
import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReacDOM from 'react-dom';

const BackDrops  =(props) =>{
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