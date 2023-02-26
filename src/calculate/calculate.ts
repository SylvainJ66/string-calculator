export function calculate(input: string) {
  if (input.includes(',')) {
    if(input[1] === ',')
      return +input[0] + +input[2];
    return +input.substring(0, 2) + +input[3];
  }
  return +input;
}
