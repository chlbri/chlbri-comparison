import { compareFunctions } from './function';

function func1() {
  return 1;
}

function func2() {
  return 1;
}

const func3 = () => 1;
const func4 = () => 1;

describe('Functions', () => {
  it('Normal functions can be compared', () => {
    const expected = true;
    const actual = compareFunctions(func1, func2);
    expect(actual).toBe(expected);
  });
  it('Arrow functions cannot be compared to normal functions', () => {
    const expected = false;
    const actual = compareFunctions(func1, func2, func3);
    expect(actual).toBe(expected);
  });
  it('Arrows functions can be compared', () => {
    const expected = true;
    const actual = compareFunctions(func4, func3);
    expect(actual).toBe(expected);
  });
});
