import { useState, useEffect } from "react";

const useCartMethods = ()=>{

  const [cartItems,setCartItems] = useState([]);
 
  function incrementItemCount(id){
    const newCartItems = cartItems.map((item)=>{
      if(item.product.id == id){
        item.count++;
      }
      return item;
    });
    setCartItems(newCartItems);
  }
  function decrementItemCount(id){
    const newCartItems = cartItems.map((item)=>{
      if(item.product.id == id){
        item.count--;
      }
      return item;
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
  }
  function removeCartItem(id){
    const newCartItems = cartItems.filter(item=>{
      if(item.id !==id){
        return item;
      }
    });
    setCartItems(newCartItems);
  }
  return{
    cartItems,incrementItemCount,decrementItemCount,addCartItem,removeCartItem
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
    useCartMethods2
}