/**
 * Run this file with: node main.js
 * (the .js extension tells Node to treat it as an ES module, enabling
 * import/export syntax without any extra configuration)
 */

// Named imports must match the exported names exactly, wrapped in { }.
import { add, subtract, multiply } from "./mathUtils.js";

// Default imports can be named ANYTHING on the importing side — there's no
// { } because there's only one possible thing being imported by default.
import greet from "./greet.js";

console.log("23) add(2, 3):", add(2, 3));
console.log("23) subtract(10, 4):", subtract(10, 4));
console.log("23) multiply(6, 7):", multiply(6, 7));

console.log("24)", greet("Kallol"));
