import { renderHook,act, waitFor } from "@testing-library/react";
import { describe,it,expect ,vi, beforeEach, afterAll, afterEach } from "vitest";
import { useProductData } from "../src/utils/hooks";

describe("getting one product",()=>{

    beforeEach(()=>{
        global.fetch =vi.fn();
    });

    afterEach(()=>{
        vi.resetAllMocks();
    });

    it("product with id of 1",async () => {
        global.fetch.mockResolvedValueOnce({
            json: async()=>({
                id:1,
                title:"mocha",
                category:"category 1",
                price:"109$"
            })
        });

        const {result} = renderHook(()=>useProductData(1));
       
        expect(result.loading).toBe(true);
        await waitFor(()=>{
            expect(result.ProductData.title).toBe("mocha") ;
        });
       
    });
});




/* 
in the cart item test incrmenting and decrmenting funcionlity
act(()=>{
   result.item.function() // call increament funcion
   expect(result.item.count).toBe(2)  // to be incrmented by one
    });
*/