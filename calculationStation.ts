export function getDiamondArea(
  largerDiagonal: number,
  smallerDiagonal: number
):number {
  return (largerDiagonal * smallerDiagonal) / 2;
}

export function getCircleArea(r: number): number {
  return (r ** 2) * 3.14;
}
