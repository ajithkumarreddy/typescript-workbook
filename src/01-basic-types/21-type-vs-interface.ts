// type
type User = {
  name: string;
  age: number;
};

// interface
interface User1 {
  name: string;
  age: number;
}

// extending types
type Person = {
  name: string;
};

type Employee = Person & {
  role: string;
};

interface Person1 {
  name: string;
}

interface Employee1 extends Person1 {
  role: string;
}

// declaration merging (only interface)
interface User2 {
  name: string;
}

interface User2 {
  age: number;
}
