export function calculate(input: string) {
  let i = input.indexOf(',');
  let result = +input.slice(0, i);
  result += +input.slice(i + 1, input.length);
  return result;
}
