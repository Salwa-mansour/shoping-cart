import { useAllProductsData } from "../utils/hooks";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function ProductsList({addCartItem}){
      const { allProductsData, error, loading } =useAllProductsData();

     if (loading) return <p>Loading...</p>;
     if (error) return <p>A network error was encountered</p>;
  
     return(
        <ul className="product-list">
            {
                allProductsData.map(product=>{
                    return(
                        <li key={product.id}>
                           {/* <Link to={`/product/${product.id}`}> */}
                           <ProductCard addCartItem={addCartItem} Product={product} />
                           {/* </Link> */}
                        
                        </li>
                      
                    )
                })
            }
        </ul>
     )
}

export default ProductsList