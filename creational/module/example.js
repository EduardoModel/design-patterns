// Example for the Module Pattern
const myCounterModule = (function () {
  let counter = 0;

  return {
    increment() {
      // The declaration was made this way to first increment the counter value and then return the value
      return ++counter;
    },
    reset() {
      counter = 0;
      return counter;
    },
  };
})();

console.log('\x1b[33m%s\x1b[0m', 'Counter example');

console.log(`Increment: ${myCounterModule.increment()}`);
console.log(`Increment: ${myCounterModule.increment()}`);
console.log(`Increment: ${myCounterModule.increment()}`);

console.log(`Reset: ${myCounterModule.reset()}`);

console.log('\x1b[33m%s\x1b[0m', '\nBank Account example');

const myBankAccountModule = (function () {
  let currentAmount = 0;
  let currentInterestCharges = 1; // %

  return {
    getCurrentAmount() {
      return currentAmount;
    },

    deposit(amount) {
      if (amount <= 0) {
        return amount;
      }
      currentAmount += amount;
      return currentAmount;
    },

    widraw(amount) {
      if (amount <= 0) {
        return amount;
      }
      currentAmount -= amount;
      return currentAmount;
    },

    addInterestCharge() {
      currentAmount += currentAmount * (currentInterestCharges / 100);
      return currentAmount;
    },

    setInterestCharge(interestCharge) {
      if (interestCharge < 0 || interestCharge > 100) {
        return;
      }
      currentInterestCharges = interestCharge;
    },
  };
})();

console.log(`Set an amount: ${myBankAccountModule.deposit(700)}`);

const interestRate = 2.5;
console.log(`Set the interest rate to ${interestRate}%`);
myBankAccountModule.setInterestCharge(interestRate);

console.log(
  `Add the interest charge into the amount: ${myBankAccountModule.addInterestCharge()}`
);

const widrawValue = 310;
console.log(
  `Make a widraw from the account from ${widrawValue}: ${myBankAccountModule.widraw(
    widrawValue
  )}`
);

console.log(
  `Add the interest charge into the amount: ${myBankAccountModule.addInterestCharge()}`
);

console.log(
  `Get the current amount: ${myBankAccountModule.getCurrentAmount()}`
);
