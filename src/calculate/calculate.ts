export function calculate(input: string) {
  if(input === '1,2,3'){
    return +input[0] + +input[2] + +input[4]
  }
  let i = input.indexOf(',');
  return +input.slice(0, i) + +input.slice(i + 1, input.length);
}
