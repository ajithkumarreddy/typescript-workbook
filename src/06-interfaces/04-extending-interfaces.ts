// interface contracts for classes
interface Authenticable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticableAdmin extends Authenticable {
  role: "admin" | "guest";
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
