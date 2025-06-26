/* enum type
enum (short for enumeration) is a way to define a named set of constant values.
*/

enum Role {
  Admin, // 0
  Editor, // 1
  Guest, // 2
}

let userRole: Role = Role.Admin;

// ...

userRole = Role.Guest;
