// getter
class User {
  constructor(private firstName: string, private lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const sampleUser = new User("Alex", "Choa");
console.log(sampleUser.fullName);
