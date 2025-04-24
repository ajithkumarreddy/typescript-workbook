// Generic functions & type inference
function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge<number>(1, 2);

// Multiple Generic parameters
function merge1<T, U>(a: T, b: U) {
  return [a, b];
}

const result = merge1<number, string>(1, "Hello");
