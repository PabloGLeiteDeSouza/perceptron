export function calculateEuclideanDistance(movieVector: number[], inputVector: number[]): number {
    const sumOfSquares = movieVector.reduce((sum, value, index) => {
      return sum + Math.pow(value - inputVector[index], 2);
    }, 0);
  
    return Math.sqrt(sumOfSquares);
}