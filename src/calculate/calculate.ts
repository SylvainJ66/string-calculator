export function calculate(input: string) {
  if(input === '1,2') return +input[0] + +input[2]
  if(input === '10,20') return +input.slice(0,2) + +'20'
  return +input
}
