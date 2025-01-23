import {render, renderHook,act, waitFor,screen } from "@testing-library/react";
import { describe,it,expect ,vi, beforeEach, afterEach } from "vitest";
import {useCartMethods} from "../src/utils/hooks";

describe("product items list controle",()=>{
    it("add product to cart",()=>{
        const product = {
            id:1,
            title:"mocha", 
            category:"category 1",
            price:"109$"
        }
        const {result} = renderHook(()=>useCartMethods());
        expect(result.current.cartItems).toEqual([]);
      
        act(()=>{
        result.current.addCartItem(product);
       
       expect(result.current.cartItems[0].product).toEqual(product);
        });
        console.log(result.current.cartItems[0])
    });
});