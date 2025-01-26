// import {render, renderHook,act,cleanup, waitFor,screen } from "@testing-library/react";
// import { describe,it,expect ,vi, beforeEach, afterEach } from "vitest";
// import {useCartMethods} from "../utils/hooks";


// describe("product items list controle",()=>{

//     const product = {
//         id:1,
//         title:"mocha", 
//         category:"category 1",
//         price:"109$"
//     }
//     const {result} = renderHook(()=>useCartMethods());
        
//     it("add product to cart",()=>{
//         expect(result.current.cartItems).toEqual([]);
      
//         act(()=>{
//         result.current.addCartItem(product);
//         });
//         expect(result.current.cartItems[0].product).toEqual(product);
   
//     });
  
//     it("increase product count",()=>{
//       const cartItemId=result.current.cartItems[0].id;
//       act(()=>{
//         result.current.incrementItemCount(cartItemId);
//       });
//       expect(result.current.cartItems[0].count).toBe(2);
   
//       act(()=>{
//         result.current.incrementItemCount(cartItemId);
//       });
//       expect(result.current.cartItems[0].count).toBe(3);
   
//     });
//     it("decrease product count",()=>{
//      const cartItemId=result.current.cartItems[0].id;
//       act(()=>{
//         result.current.decrementItemCount(cartItemId);
//       });
//       expect(result.current.cartItems[0].count).toBe(2);
   
//     });
// });
// // describe("product items list controle2",()=>{
// //     const product = {
// //         id:1,
// //         title:"mocha", 
// //         category:"category 1",
// //         price:"109$"
// //     }
// //     const {result} = renderHook(()=>useCartMethods());
    
// //     it("remove item from cart",()=>{
// //         act(()=>{
// //         result.current.addCartItem(product);
// //         });
// //        console.log(result.current.cartItems)
// //         const cartItemId=result.current.cartItems[0].id;
// //       console.log(cartItemId)
// //         act(()=>{
// //             result.current.removeCartItem(cartItemId);
// //         });
// // console.log(result.current.cartItems)
// //        expect(result.current.cartItems).toEqual([]);
      
// //     });
// // });