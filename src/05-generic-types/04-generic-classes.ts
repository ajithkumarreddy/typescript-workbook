// Generic classes
class User<T> {
  constructor(public id: T) {}
}

const user = new User("A1");
user.id;
