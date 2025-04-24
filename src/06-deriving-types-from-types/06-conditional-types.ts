// conditional types

type StringArray = string[];
let text = 1;

type GetElementType<T> = T extends any[] ? T[number] : never;

type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;
