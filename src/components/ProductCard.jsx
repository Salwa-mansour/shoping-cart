
import { Link } from "react-router-dom";
import { useProductData } from "../utils/hooks";

 function ProductCard({id}){

      const { ProductData, error, loading } = useProductData(id);
    
      if (loading) return <p>Loading...</p>;
      if (error){ return <p>A network error was encountered</p>;
      }
    return(
       <div>
         <h5>{ProductData.title}</h5>
        <img src={ProductData.image} alt={ProductData.title} width="200" />
       </div>
    );
}

export default  ProductCard;