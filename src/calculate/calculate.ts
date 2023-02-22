export function calculate(input: string) {
  const indexComma = input.indexOf(',');
  if(indexComma > -1)
    return +input.substring(0, indexComma) + +input.substring(indexComma+1, input.length);
  return +input;
}