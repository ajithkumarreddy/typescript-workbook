// function type as a variable
let multiply: (x: number, y: number) => number;

multiply = (a, b) => a * b;

// function type aliases (Reusable)
type MathOperation = (x: number, y: number) => number;

const addition: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
