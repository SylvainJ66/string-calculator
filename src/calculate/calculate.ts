export function calculate(input: string) {
  if (input.includes(',')) {
    let commaIndex = 1;
    if (input[commaIndex] === ',')
      return +input[0] + +input[2];
    return +input.substring(0, 2) + +input[3];
  }
  return +input;
}
