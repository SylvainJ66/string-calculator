export function calculate(input: string) {
  let i = 1;
  while(input[i] === ',') {
    return +input.slice(0, i) + +input.slice(i + 1, 3);
  }
  i = 2;
  while(input[i] === ',') {
    return +input.slice(0, i) + +input.slice(i + 1, input.length);
  }
  return +input
}
