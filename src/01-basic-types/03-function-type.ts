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

// void type
function log(message: string): void {
  console.log(message);
}
