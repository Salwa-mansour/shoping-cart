import ProductsList from "../components/ProductsList";
import '../styles/shop.css'

import { useOutletContext } from "react-router-dom";


export default function Shop(){
    const {addCartItem} = useOutletContext();

    return(
        <div>
           
            <ProductsList addCartItem={addCartItem}/>
        </div>
    );
}