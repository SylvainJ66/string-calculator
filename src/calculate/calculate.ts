export function calculate(input: string) {
  const numbers = input.split(',').map(Number);
  return numbers.reduce((sum, current) => sum + current, 0);
}