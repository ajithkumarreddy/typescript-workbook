// function parameters
function add(a: number, b = 5) {
  return a + b;
}

add(2 + 3);

// function return type
type Role = "admin" | "editor" | "guest" | "reader";

function access(role: Role): string {
  // ...
  return "admin";
}

// void return type
function log(message: string): void {
  console.log(message);
}

// function optional parameters
function logger(message: string, userId?: string): void {
  console.log(message, userId);
}

// function default parameters
function greet(name: string = "Guest"): string {
  return `Hi, ${name}`;
}

// function type as a variable
let multiply: (x: number, y: number) => number;

multiply = (a, b) => a * b;


// function type aliases (Reusable)
type MathOperation = (x: number, y: number) => number;

const addition: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
