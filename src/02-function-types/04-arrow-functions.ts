// typed arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// one liner arrow function
const double = (x: number): number => x * 2;

// arrow function with no parameters
const getRandom = (): number => Math.random();

// function type aliases
type Operation = (a: number, b: number) => number;

const addition: Operation = (x, y) => x + y;
