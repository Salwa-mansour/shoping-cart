
import { Link } from "react-router-dom";
import mainBackground from "../assets/buy-cloth.jpg";
 function Hero(){
    return(
      <div className="hero">
        <img src={mainBackground} alt="" />
        <Link to="Shop" className="shop-now-link" >Shop Now</Link>
       </div>
    );
}

export default  Hero;