import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [showModal,setShowModal] =React.useState(false);


  const showModalHandler =()=>{
      setShowModal(true);
  }
  const hideModalHandler =()=>{
      setShowModal(false);
  }

  return (<>
  <CartProvider>
 {showModal && <Cart hideModalHandler={hideModalHandler} />}
<Header showModalHandler={showModalHandler} />
<main>
  <Meals/>
</main>
</CartProvider>
</>
  );
}

export default App;
