import { useCartMethods } from "../utils/hooks"

function AddToCartBtn({addCartItem,product}){
// const {addCartItem } = useCartMethods();

 return(
    <>
    <button onClick={()=>{addCartItem(product)}} >add to cart</button>
    </>
 )
}
export default AddToCartBtn