import { useState, useEffect } from "react";

const useCartMethods = ()=>{

  const [cartItems,setCartItems] = useState([]);
 
  function incrementItemCount(item){
    const newCartItems = cartItems.map((cartItem)=>{
      if(cartItem.id == item.id){
        cartItem.count++;
    
      }
      return cartItem;
    });
   // console.log(newCartItems)
    setCartItems(newCartItems);
  }
  function decrementItemCount(item){
    const newCartItems = cartItems.map((cartItem)=>{
      if(cartItem.id == item.id){
        cartItem.count--;
      }
      return cartItem;
    });
    setCartItems(newCartItems);

  }
  function reSetItemCount(item,count){
    const newCartItems = cartItems.map((cartItem)=>{
      if(cartItem.id == item.id){
        cartItem.count = count;
      }
      return cartItem;
    });
    setCartItems(newCartItems);

  }
  function addCartItem(product){
    
    const cartItem ={
      id:crypto.randomUUID(),
      product:product,
      count:1
    }

    setCartItems([...cartItems,cartItem]);
console.log(cartItems)
  }

  function removeCartItem(id){
    const newCartItems = cartItems.filter(item =>item.id != id);
  
      setCartItems(newCartItems);
  
  }
  return{
    cartItems,incrementItemCount,decrementItemCount,reSetItemCount,addCartItem,removeCartItem
  };
};
const useAllProductsData = (id="") => {
  const [allProductsData, setAllProductsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id?  id :"?limit=15"}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setAllProductsData(response))
      .catch((error) =>{ setError(error)})
      .finally(() => setLoading(false));
  }, []);

  return { allProductsData , error, loading };
};



export {
    useAllProductsData,
    useCartMethods,
    
}