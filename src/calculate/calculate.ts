export function calculate(input: string) {
  if(input[1] === ',')
    return +input[0] + +input[2];
  return +input;
}