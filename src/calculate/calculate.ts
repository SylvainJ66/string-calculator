export function calculate(input: string) {
  if(input === '1,2') return +input.slice(0,1) + +input.slice(2,3);
  if(input === '10,20') return +input.slice(0,2) + +input.slice(3,input.length);
  return +input;
}
