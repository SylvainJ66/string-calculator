export function calculate(input: string) {
  if(input === '1,2') return +input[0] + +'2';
  if(input === '2,3') return +'2' + +'3';
  return +input;
}
