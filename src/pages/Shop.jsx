import Navigation from "../components/navigaion";
import ProductCard from "../components/ProductCard";

export default function Shop(){
    return(
        <div>
            <Navigation/>
            <ProductCard id={1}/>
        </div>
    );
}