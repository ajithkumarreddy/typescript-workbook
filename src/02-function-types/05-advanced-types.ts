/*  
Function overloading means you define multiple function signatures, and 
then implement one function that handles all of them.
*/

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

combine(1, 2); // 3 number
combine("Hello ", "World!"); // Hello World! string

// function types in interface
interface calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const calc: calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
};

// call signatures
interface logger {
  (message: string): void;
}

const logMessage: logger = (msg) => console.log(msg);

// this Typing in functions
interface User {
  name: string;
  greet(this: User): void;
}

const user: User = {
  name: "Alex",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

/*  
never return type
Used when a function never returns — like throwing an error or infinite loop
*/
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
