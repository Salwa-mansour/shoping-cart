import { ShoppingCart } from 'lucide-react';



function CartIcon({cartItems,showCart,setShowCart}){
    function reShowCart(e="",cartItems,showCart,setShowCart){
      
        if(e.type ==="click" || e.key ==="Enter"){
            setShowCart(!showCart)
            if(showCart){
            document.querySelector('.cart').focus();
            }
        }
          
     
    }

    return(
        // <div className='cart-icon' onClick={()=>setShowCart(!showCart)} tabIndex="0" onKeyUp={(e)=>{if(e.key ==="Enter") return setShowCart(!showCart)} } >
        <div className='cart-icon' onClick={(e)=>reShowCart(e,cartItems,showCart,setShowCart)} tabIndex="0" onKeyUp={(e)=>reShowCart(e,cartItems,showCart,setShowCart) } >
            <span>{cartItems.length}</span>
            <ShoppingCart/>
        </div>
    );
}

export default CartIcon