export function calculate(input: string) {
  if((input.match(/,/g)||[]).length > 1){
    let i = input.indexOf(',');
    let result2 = +input.slice(0, i);
    input = input.substring(+input.slice(0, i+1).length);
    i = input.indexOf(',');
    result2 += +input.slice(0, i);
    result2 += +input.slice(i + 1, input.length);
    return result2;
  }
  let i = input.indexOf(',');
  let result = +input.slice(0, i);
  result += +input.slice(i + 1, input.length);

  return result;
}
