import { EquilateralTriangle } from "./abstraction";

(() => {
    try {
        
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
