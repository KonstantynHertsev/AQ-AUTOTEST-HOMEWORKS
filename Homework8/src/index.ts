import { EquilateralTriangle } from "./abstraction";

(() => {
    try {
        const triangle = new EquilateralTriangle(3);
        console.log(triangle.calcPerimeter());
        console.log(triangle.calcArea().toFixed(2));
        console.log("\n------------------\n");
        const triangle1 = new EquilateralTriangle(5);
        console.log(triangle1.calcPerimeter());
        console.log(triangle1.calcArea().toFixed(2));
        console.log("\n------------------\n");
        const triangle2 = new EquilateralTriangle(7);
        console.log(triangle2.calcPerimeter());
        console.log(triangle2.calcArea().toFixed(2));

    } catch (error) {
        console.error("Error:", error);
    }
})();

import {Country, Obj2} from "./interface";
(()=>{
    try{
        async function getJson(): Promise<Country> {
            const response = await fetch('https://restcountries.com/v3.1/name/ukraine');
            const json = await response.json() as Country[];
            return json[0];    
        }
        
        (async () => {
            const data = await getJson();
            const obj2 = new Obj2(data);
        
            console.log(obj2.getSummary()); 
        })();
    }catch (error) {
        console.error("Error:", error);
    }
})();