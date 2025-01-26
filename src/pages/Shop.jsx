import Navigation from "../components/navigaion";
import ProductsList from "../components/ProductsList";
import '../styles/shop.css'

import { useOutletContext } from "react-router-dom";


export default function Shop(){
    const {cartItems ,addCartItem,removeCartItem,incrementItemCount,decrementItemCount,reSetItemCount} = useOutletContext();

    return(
        <div>
           
            <ProductsList addCartItem={addCartItem}/>
        </div>
    );
}