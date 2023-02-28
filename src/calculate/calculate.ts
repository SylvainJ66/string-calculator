export function calculate(input: string) {
  let i = input.indexOf(',');
  if(input[i] === ',') {
    return +input.slice(0, i) + +input.slice(i + 1, input.length);
  }
  i = 2;
  if(input[i] === ',') {
    return +input.slice(0, i) + +input.slice(i + 1, input.length);
  }
  return +input
}
