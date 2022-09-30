console.log("Test");
class User {
  constructor(email, name) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(this.name, "just logged in");
    return this;
  }

  // logout() {
  //   console.log(this.email, "just logged out");
  //   return this;
  // }

  // updateScore() {
  //   this.score++;
  //   console.log(this.email, "score is now", this.score);
  //   return this;
  // }
}

// var userOne = new User("jessshen@gmail.com", "Jessa");
// var userTwo = new User("jhnmcndn@gmail.com", "Marco");

login("Mac");
// .updateScore().updateScore().logout();
// const mac = function (name) {
//   console.log(`hi my name is ${name}`);
// };

// mac("mac").eat("apple");
