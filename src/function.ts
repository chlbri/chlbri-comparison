/**
 *
 * @param args (only defined functions, not arrow functions)
 * @returns true if all functions have the same shape.
 */
export function compareFunctions(
  ...args: ((...args: any) => any)[]
): boolean {
  const first = mapper(args[0]);
  return args.map(mapper).every(arg => arg === first);
}

function mapper(arg: (...args: any) => any) {
  return arg.toString().replace(`function ${arg.name}`, '');
}
