import ProductCard from "../components/ProductCard";
import { useAllProductsData } from "../utils/hooks";
import { useParams } from "react-router-dom";

function Product(){
    const { id } = useParams();

    const { allProductsData, error, loading } =useAllProductsData(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;


   
    return(
        <>
          <ProductCard Product={allProductsData} />
        </>
    )

}

export default Product