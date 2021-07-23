// Example for the Constructor Pattern

const faker = require('faker');

function UserConstructor(firstName, lastName, age) {
  // The reserved keyword this is responsable to bind the values with
  // the object that will be created
  this.firstName = firstName ?? faker.name.firstName();
  this.lastName = lastName ?? faker.name.lastName();
  this.age = age ?? faker.datatype.number(100);

  // It is possible to define methods for the object as well
  this.greetings = () => {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I'm ${
      this.age
    } year${this.age > 1 ? 's' : ''} old`;
  };
}

// Create an user
const user = new UserConstructor('Tim', 'Davis', 21);

console.log('\x1b[33m%s\x1b[0m', 'Log of the new created object');

// Log the created user properties
console.log(user);

// Log the return of the call of the greetings function
console.log(user.greetings());

// Create a new user withou the paramethers to use the randomized values provided by the faker library
const userWithoutParams = new UserConstructor();

console.log(
  '\x1b[33m%s\x1b[0m',
  '\nLog of the new created object without paramethers'
);

console.log(userWithoutParams);

console.log(userWithoutParams.greetings());

// Other way to define a constructor nowdays would be with a class
class UserConstructorClass {
  constructor(firstName, lastName, age) {
    this.firstName = firstName ?? faker.name.firstName();
    this.lastName = lastName ?? faker.name.lastName();
    this.age = age ?? faker.datatype.number(100);

    this.greetings = () => {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I'm ${
        this.age
      } year${this.age > 1 ? 's' : ''} old and I never gonna give you up.`;
    };
  }
}

const userWithClass = new UserConstructorClass('Rick', 'Astley', 34);

console.log(
  '\x1b[33m%s\x1b[0m',
  '\nLog of the new created object with the class'
);
console.log(userWithClass);
console.log(userWithClass.greetings());
