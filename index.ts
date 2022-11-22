import * as calc from './calculationStation';

console.log("A área de um:");
console.log("-----------------------------------------");
console.log("CÍRCULO");
console.log("para r = 3: ", calc.getCircleArea(3),"cm²");
console.log("para r = 7: ", calc.getCircleArea(7),"cm²");
console.log("para r = 10: ", calc.getCircleArea(10),"cm²");
console.log("-----------------------------------------");
console.log("LOSANGO");
console.log("para D = 32cm e d = 18cm: ", calc.getDiamondArea(32, 18),"cm²");
console.log("para D = 200cm e d = 50cm: ", calc.getDiamondArea(200, 50),"cm²");
console.log("para D = 75cm e d = 25cm: ", calc.getDiamondArea(75, 25),"cm²");
