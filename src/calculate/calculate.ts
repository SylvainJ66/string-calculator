export function calculate(input: string) {
  let comma = 1;
  while (input[comma] === ',') {
    return +input.slice(0, comma) + +input.slice(comma + 1, input.length);
  }
  comma = 2;
  if (input[comma] === ',') {
    return +input.slice(0, comma) + +input.slice(comma + 1, input.length);
  }

  return +input;
}
