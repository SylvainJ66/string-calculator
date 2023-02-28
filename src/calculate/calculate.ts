export function calculate(input: string) {
  let i = input.indexOf(',');
  return +input.slice(0, i) + +input.slice(i + 1, input.length);
}
