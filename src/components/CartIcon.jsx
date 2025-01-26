import { ShoppingCart } from 'lucide-react';

function CartIcon({cartItems,showCart,setShowCart}){
    return(
        <div className='cart-icon' onClick={()=>setShowCart(!showCart)}>
            <span>{cartItems.length}</span>
            <ShoppingCart/>
        </div>
    );
}

export default CartIcon