// interface contracts for classes
interface Authenticable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

class AuthenticableUser implements Authenticable {
  constructor(public email: string, public password: string) {}

  login() {
    // ...
  }

  logout() {
    // ...
  }
}
