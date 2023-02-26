export function calculate(input: string) {
  if (input.includes(',')) {
    const commaIndex = input.indexOf(',');
    return +input.substring(0, commaIndex) + +input.substring(commaIndex + 1);
  }
  return +input;
}
