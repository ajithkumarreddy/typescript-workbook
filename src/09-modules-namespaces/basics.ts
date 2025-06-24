// Namespace example
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

// Usage
const sum = MathUtils.add(5, 3); // 8
const diff = MathUtils.subtract(10, 4); // 6

// 📝 Note: Use namespaces for grouping logic within the same project/file when not using modules or bundlers.

// modules example

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  return a / b;
}

import { multiply, divide } from "./mathUtils";

console.log(multiply(4, 2)); // 8
console.log(divide(10, 2)); // 5
// 📝 Note: Modules are the modern standard, especially when working with bundlers like Webpack, Vite, or using frameworks like React/Next.js.
