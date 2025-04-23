// type guard "instanceof"

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permission: string[]) {}

  scan() {
    // ...
  }
}

const user = new User("Hanuman");
const admin = new Admin(["allow", "revoke"]);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    // ...
    entity.join();
    return;
  }

  entity.scan();
}
