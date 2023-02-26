export function calculate(input: string) {
  if (input.includes(',')) {
    const commaIndex = input.indexOf(',');
    if (input[commaIndex] === ',')
      return +input.substring(0, commaIndex) + +input.substring(commaIndex + 1);
  }
  return +input;
}
