import { useReducer } from "react";
import cartContext from "./cart-context";

const intialCartState={
    items:[],
    totalAmount:0
}

const cartReducer =(state,action)=>{

  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    console.log("FF",action.item.amount);

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if(action.type === "CLEAR")
  {
    return intialCartState;
  }

  return intialCartState;
}

const CartProvider = (props)=>{

    const [cartState,disptchCart] =useReducer(cartReducer,intialCartState);

    const addItemToCartHandler =(item)=>{
            disptchCart({type:"ADD",item:item});
    }
    const removeItemToCartHandler =(id)=>{
        disptchCart({type:"REMOVE",id:id});
    }

    const clearCartHandler = ()=>{
      disptchCart({type:'CLEAR'});
    }

   const cartContextInitial={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemToCartHandler,
    clearCart:clearCartHandler
   }
    return <cartContext.Provider value={cartContextInitial}>
            {props.children}
    </cartContext.Provider>

}
export default CartProvider;
