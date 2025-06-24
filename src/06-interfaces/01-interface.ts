// interface for object type
interface Authenticable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

let user: Authenticable;

user = {
  email: "test@test.com",
  password: "abc1",
  login() {
    // reach out to database, check credentials, create a session
  },
  logout() {
    // clear the session
  },
};
