import ControlCount from "./ControlCount";
import '../styles/Cart.css'

function CartItem({item}){

    return(
        <div>
            <h5>{item.product.title}</h5>
            <p>{item.product.price}</p>
            <p>{item.count}</p>
        </div>
    )
}
function Cart({cartItems,removeCartItem,incrementItemCount,decrementItemCount,reSetItemCount,showCart,setShowCart}){
   
console.log('cart',showCart)
    return(
        <div className= { showCart?  "overlay show" :"overlay"} onClick={()=>setShowCart(false)} >
            <table className="cart" onClick={(e)=> e.stopPropagation()}>
                {
                    cartItems.map(item=>{
                        return(
                            <tr key={item.id} >
                                <td>
                                    {<CartItem item={item}/>} 
                                </td>
                                <td>
                            { <ControlCount item={item} incrementItemCount={incrementItemCount} 
                                decrementItemCount={decrementItemCount} reSetItemCount={reSetItemCount} /> }
                                </td>
                                <td>
                                <button onClick={()=>removeCartItem(item.id)} >❌</button>
                                </td>
                            
                            </tr>
                        )}
                    )
                }
            </table>
        </div>
    )

}

export default Cart