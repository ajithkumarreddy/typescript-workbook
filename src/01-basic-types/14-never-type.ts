// never type
function logAndThrow(message: string): never {
  console.log(message);
  throw new Error(message);
}
