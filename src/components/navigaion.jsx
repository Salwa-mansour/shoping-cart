
import { Link, useOutlet, useOutletContext } from "react-router-dom";
import CartIcon from "./CartIcon";
import '../styles/Header.css'
// import Hero from "./Hero";

 function Navigation({cartItems,showCart,setShowCart}){
  
    return(
      <nav>
        <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="Shop" >Shop</Link>
            </li>
            <li >
              <CartIcon cartItems={cartItems} showCart={showCart} setShowCart={setShowCart} />
            </li>
        </ul>
      </nav>
    );
}

export default  Navigation;