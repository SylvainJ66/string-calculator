export function calculate(input: string) {
  if (input.includes(',')) return +input[0] + +input[2];
  return +input;
}
