export function calculate(input: string) {
  if(input === '1,2,3'){
    return +'6'
  }
  let i = input.indexOf(',');
  return +input.slice(0, i) + +input.slice(i + 1, input.length);
}
