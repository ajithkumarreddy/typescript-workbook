// function optional parameters
function logger(message: string, userId?: string): void {
  console.log(message, userId);
}

// function default parameters
function greet(name: string = "Guest"): string {
  return `Hi, ${name}`;
}

// function rest parameters
function sumOf(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

sumOf(1, 2, 4);

// function parameters + rest
function greetAll(greeting: string, ...names: string[]): void {
  names.forEach((name) => logger(`${greeting}, ${name}`));
}

greetAll("Hello!", "Alex", "Alan", "Abet");

/* Notes:
1. Rest parameters must be the last parameter in the function.
2. You cannot have another parameter after ...args. */
