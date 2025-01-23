import {render, renderHook,act, waitFor,screen } from "@testing-library/react";
import { describe,it,expect ,vi, beforeEach, afterEach } from "vitest";
import { useAllProductsData } from "../src/utils/hooks";
import ProductCard from "../src/components/ProductCard";
import { useCartMethods2 } from "../src/utils/hooks";

describe("product data",()=>{

    beforeEach(()=>{
        global.fetch =vi.fn();
    });

    afterEach(()=>{
        vi.resetAllMocks();
    });

    it("get all products",async () => {
        global.fetch.mockResolvedValueOnce({
            json: async()=>([{
                id:1,
                title:"mocha",
                category:"category 1",
                price:"109$"
            }])
        });
      
        const {result} =  await act(async () => renderHook(()=>useAllProductsData()));
       
        expect(result.current.loading).toBe(false);
        await waitFor(()=>{
            expect(result.current.allProductsData[0].title).toBe("mocha") ;
        });
       
    });
    it("get one product",async () => {
        global.fetch.mockResolvedValueOnce({
            json: async()=>({
                id:1,
                title:"mocha",
                category:"category 1",
                price:"109$"
            })
        });
      
        const {result} =  await act(async () => renderHook(()=>useAllProductsData(1)));
       
        expect(result.current.loading).toBe(false);
        await waitFor(()=>{
            expect(result.current.allProductsData.title).toBe("mocha") ;
        });
       
    });
});

describe("shop dom",()=>{
    it("product card",()=>{
        const product ={
            id:1,
            title:"mocha",
            category:"category 1",
            price:"109$"
        };
        render(<ProductCard Product={product} />)
        const text = screen.getByRole("heading",{name:/mocha/i})
        
        expect(text).toBeInTheDocument();
    });


});

/* 
in the cart item test incrmenting and decrmenting funcionlity
act(()=>{
   result.item.function() // call increament funcion
   expect(result.item.count).toBe(2)  // to be incrmented by one
    });
*/