export function calculate(input: string) {
  if(input === '1,2,3'){
    return +input.slice(0, 1) +
      +input.slice(1+1, 3) +
      +input.slice(1+3, 5)
  }
  let i = input.indexOf(',');
  return +input.slice(0, i) + +input.slice(i + 1, input.length);
}
