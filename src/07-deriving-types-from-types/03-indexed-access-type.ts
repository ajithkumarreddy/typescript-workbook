// indexed access type

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser["permissions"]; // array of object types
type perm = Perms[number]; // object type
