// Example for the Prototype Pattern
const faker = require('faker');

const user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  salutation() {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
  },
};

// To create a clone of an object we utilize the Object.create method
const anotherUser = Object.create(user);

console.log('\x1b[33m%s\x1b[0m', 'Example with the Object.create method');

console.log(
  `Does the functions share the same memory address? ${
    anotherUser.salutation === user.salutation
      ? 'Yeap, they share 👍'
      : `Nop, they don't share 👎`
  }`
);

// Another approach with the clone method attached to the object itself
function User({ firstName, lastName }) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.salutation = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  };

  // With this approach the logic is all encapsulated inside the object itself
  // avoiding the call of the Object.create method
  this.clone = function () {
    return Object.create(this);
  };
}

const newUser = new User({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
});

const copyOfNewUser = newUser.clone();

console.log(
  '\x1b[33m%s\x1b[0m',
  '\nExample with the clone method inside the object itself'
);

console.log(
  `Does the functions share the same memory address, i.e the function was passed as reference to the copied object? ${
    newUser.salutation === copyOfNewUser.salutation
      ? 'Yeap, they share 👍'
      : `Nop, they don't share 👎`
  }`
);

copyOfNewUser.firstName = 'Tom';
copyOfNewUser.lastName = 'Another';

console.log(
  `Most important, are the values different, i.e they aren't connected by reference with each other? ${
    copyOfNewUser.firstName !== newUser.firstName
      ? 'Yeap, the values are different 👍'
      : 'Nop, the values are the same after the change 👎'
  }`
);
