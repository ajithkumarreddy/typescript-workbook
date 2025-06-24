// keyof

type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;

let validKey: UserKeys;

validKey = "name";
validKey = "age";

// another usecase

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];

  if (val === undefined || val === null) {
    throw new Error("Accessing undefined or null value.");
  }

  return val;
}

const user = {
  name: "Hanuman",
  age: 24,
};

const val = getProp(user, "age");
