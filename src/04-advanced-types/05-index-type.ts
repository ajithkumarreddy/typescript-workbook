// index type

type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;

// another implementation using Record type

let someObj: Record<string, string | number | boolean> = {};

someObj.name = "Hanuman";
someObj.age = 32;
someObj.isAdmin = false;
