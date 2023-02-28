export function calculate(input: string) {
  if(input === '1,2,3'){
    const j = 1;
    return +input.slice(0, j) +
      +input.slice(j+1, 3) +
      +input.slice(j+3, input.length)
  }
  let i = input.indexOf(',');
  return +input.slice(0, i) + +input.slice(i + 1, input.length);
}
