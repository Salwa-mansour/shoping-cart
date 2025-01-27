import { Outlet } from "react-router-dom";
import Navigation from "../components/navigaion";
import { useCartMethods } from "../utils/hooks"
import { useState } from "react";
import Cart from "../components/Cart";

function Layout(){
    const {cartItems,addCartItem,removeCartItem,incrementItemCount,decrementItemCount,reSetItemCount} = useCartMethods();
    const [showCart,setShowCart] = useState(false);

    return(
        <>
        <Navigation cartItems={cartItems} showCart={showCart} setShowCart={setShowCart} />
        <Outlet  context={{cartItems,addCartItem,removeCartItem,incrementItemCount,decrementItemCount
            ,reSetItemCount }} />
        <Cart cartItems={cartItems} removeCartItem={removeCartItem} incrementItemCount={incrementItemCount}
        decrementItemCount={decrementItemCount} reSetItemCount={reSetItemCount} 
        showCart={showCart} setShowCart={setShowCart}/>
        </>
    )
}

export default Layout