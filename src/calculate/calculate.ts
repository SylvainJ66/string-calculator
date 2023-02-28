export function calculate(input: string) {
  const i = 1;
  while(input[i] === ',') {
    return +input.slice(0, i) + +input.slice(i + 1, 3);
  }
  if(input[i] === ',') {
    const i = 2;
    return +input.slice(0, i) + +input.slice(i + 1, input.length);
  }
  return +input
}
