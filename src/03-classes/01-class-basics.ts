// class definition
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// another format
class User1 {
  constructor(public name: string, public age: number) {}
}

const sampleUser = new User("Hanuman", 24);

// public, private, protected, read-only
class User2 {
  public hobbies: string[] = [];

  constructor(public name: string, private age: number) {}

  greet() {
    console.log("My age: " + this.age);
  }
}
