"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const calc = __importStar(require("./calculationStation"));
console.log("A área de um:");
console.log("-----------------------------------------");
console.log("CÍRCULO");
console.log("para r = 3: ", calc.getCircleArea(3), "cm²");
console.log("para r = 7: ", calc.getCircleArea(7), "cm²");
console.log("para r = 10: ", calc.getCircleArea(10), "cm²");
console.log("-----------------------------------------");
console.log("LOSANGO");
console.log("para D = 32cm e d = 18cm: ", calc.getDiamondArea(32, 18), "cm²");
console.log("para D = 200cm e d = 50cm: ", calc.getDiamondArea(200, 50), "cm²");
console.log("para D = 75cm e d = 25cm: ", calc.getDiamondArea(75, 25), "cm²");
