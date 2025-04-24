// --- Base Interface for Examples ---
interface User {
  id: number;
  name: string;
  email?: string;
  isAdmin: boolean;
}

// --- Partial<Type> ---
type PartialUser = Partial<User>;
const partialExample: PartialUser = { id: 1 };

// --- Required<Type> ---
type RequiredUser = Required<User>;
const requiredExample: RequiredUser = {
  id: 2,
  name: "Alice",
  email: "alice@example.com",
  isAdmin: true,
};

// --- Pick<Type, Keys> ---
type UserPreview = Pick<User, "id" | "name">;
const pickExample: UserPreview = { id: 3, name: "Tom" };

// --- Omit<Type, Keys> ---
type NoEmailUser = Omit<User, "email">;
const omitExample: NoEmailUser = { id: 4, name: "Jerry", isAdmin: false };

// --- Record<Keys, Type> ---
type Roles = "admin" | "user" | "guest";
const recordExample: Record<Roles, boolean> = {
  admin: true,
  user: false,
  guest: true,
};

// --- ReturnType<Type> ---
function fetchUser() {
  return { id: 5, name: "Fetched User" };
}
type FetchedReturnType = ReturnType<typeof fetchUser>;

// --- Awaited<Type> ---
async function asyncUser() {
  return { id: 6, name: "Async User" };
}
type AwaitedUser = Awaited<ReturnType<typeof asyncUser>>;

// --- Extract<Type, Union> ---
type Mixed = string | number | boolean;
type OnlyStrings = Extract<Mixed, string>; // string

// --- Exclude<Type, ExcludedUnion> ---
type WithoutBoolean = Exclude<Mixed, boolean>; // string | number

// --- NonNullable<Type> ---
type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>; // string

// --- Parameters<Type> ---
function logDetails(id: number, status: boolean) {}
type LogDetailsParams = Parameters<typeof logDetails>; // [number, boolean]

// --- ConstructorParameters<Type> ---
class Person {
  constructor(public name: string, public age: number) {}
}
type PersonConstructorParams = ConstructorParameters<typeof Person>; // [string, number]

// --- InstanceType<Type> ---
type PersonInstance = InstanceType<typeof Person>;

// --- ThisType<Type> ---
type ObjectWithThis = ThisType<{ sayHello(): string }>;
const obj: ObjectWithThis = {
  sayHello() {
    return "Hello!";
  },
};

// --- infer keyword ---
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type ExampleReturn = GetReturnType<() => number>; // number
