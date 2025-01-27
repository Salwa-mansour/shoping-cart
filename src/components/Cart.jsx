import ControlCount from "./ControlCount";
import { Link } from "react-router-dom";
import '../styles/Cart.css'

function CartItem({item}){

    return(
        <>
          {<img src={item.product.image} width="50" />}
        <div>
            <h5>{item.product.title}</h5>
            <p>{item.product.price}</p>
            <p>{item.count}</p>
        </div>
        </>
    )
}
function Cart({cartItems,removeCartItem,incrementItemCount,decrementItemCount,reSetItemCount,showCart,setShowCart}){
   function getSubTotal(cartItems){
  
        const subTotal = cartItems.reduce((total,item)=>{
            return total+(item.product.price *item.count);
        },0);
        return subTotal;
   }
    return(
        <div className= { showCart?  "overlay show" :"overlay"} onClick={()=>setShowCart(false)} tabIndex="0" onKeyUp={(e)=>{if(e.key ==="Enter") return setShowCart(false)} } >
            <div  className="cart" onClick={(e)=> e.stopPropagation() } tabIndex="0"  >

                <button onClick={()=>setShowCart(false)} >✖</button>
                <h3>CART <span>({cartItems.length})</span></h3>
                <ul >
                    {
                        cartItems.map(item=>{
                            return(
                                <li key={item.id}>
                                
                                    {<CartItem item={item}/>} 
                                    { <ControlCount item={item} incrementItemCount={incrementItemCount} 
                                        decrementItemCount={decrementItemCount} reSetItemCount={reSetItemCount} /> }
                                
                                    <button onClick={()=>removeCartItem(item.id)} >❌</button>
                                        
                                </li>
                            )}
                        )
                    }
                </ul>
                <p>Subtotal    <span>{getSubTotal(cartItems)}</span></p>
                <button onClick={()=>setShowCart(false)} >Continue Shopping</button>
                <Link to="/" >Checkout Now</Link>
            </div>
        </div>
    )

}

export default Cart