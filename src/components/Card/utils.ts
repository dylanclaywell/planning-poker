export const fibonacci = [1, 2, 3, 5, 8, 13, 21]

export function getClosestFibonacci(value: number, direction: 'up' | 'down') {
  const closestUp = fibonacci.find((n) => n > value)
  const closestDown = [...fibonacci].reverse().find((n) => n < value)

  return direction === 'up'
    ? closestUp ?? fibonacci[fibonacci.length - 1]
    : closestDown ?? fibonacci[0]
}
