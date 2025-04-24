// Generics
let names: Array<string> = ["Alex", "Sample"];

// creating a generic type
type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Alex";
store.isInstructor = true;

let nameStore: DataStore<string> = {};
nameStore.name = "Alex";
