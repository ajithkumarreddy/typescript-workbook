// as const type

let roles = ["admin", "guest", "editor"] as const;

const firstRole = roles[0];
// roles.push("viewer"); cannot be manipulated since its a const or read-only
