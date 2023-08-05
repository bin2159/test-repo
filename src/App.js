import { useState } from "react";
import Header from "./components/header/Header";
import InputChocolate from "./components/addchocolate/InputChocolate";
import ChocolateList from "./components/ChocolateList/ChocolateList";
import ChocoContextProvider from "./context/ChocoContext";
import Cart from "./components/cart/Cart";
function App() {
  const [showCart,setShowCart]=useState(true)
  const showCartHandler=()=>{
    setShowCart(!showCart)
  }
  return (
    <ChocoContextProvider>
      <Header showCart={showCartHandler}/>
      {showCart&&<Cart showCart={showCartHandler}/>}
    <main>
      <InputChocolate/>
      <ChocolateList/>
    </main>
    </ChocoContextProvider>
  );
}

export default App;
