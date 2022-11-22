"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleArea = exports.getDiamondArea = void 0;
function getDiamondArea(largerDiagonal, smallerDiagonal) {
    return (largerDiagonal * smallerDiagonal) / 2;
}
exports.getDiamondArea = getDiamondArea;
function getCircleArea(r) {
    return (r ** 2) * 3.14;
}
exports.getCircleArea = getCircleArea;
