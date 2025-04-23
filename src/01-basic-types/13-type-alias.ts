// type alias
type Role = "admin" | "editor" | "guest" | "reader";
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role;

function access(role: Role) {}
