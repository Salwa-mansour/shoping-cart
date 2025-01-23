
import { Link } from "react-router-dom";

 function ProductCard({Product}){

    
    return(
       <>
         <h5>{Product.title}</h5>
        <img src={Product.image} alt={Product.title} width="200" />
       </>
    );
}

export default  ProductCard;