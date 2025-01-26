
import { Link } from "react-router-dom";
import AddToCartBtn from "./addToCartBtn";

 function ProductCard({addCartItem,Product}){

    
    return(
       <>
         <h5>{Product.title}</h5>
        <img src={Product.image} alt={Product.title} width="200" />
        <AddToCartBtn addCartItem={addCartItem} product={Product}/>
       </>
    );
}

export default  ProductCard;