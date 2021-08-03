// Example for the Observer Pattern

// Define a object to save all the observers with the necessary operations
function ObserverList() {
  this.list = [];

  this.add = function (observer) {
    this.list.push(observer);
  };

  this.removeAll = function () {
    this.list = [];
  };

  this.count = function () {
    return this.list.length;
  };

  this.get = function (i) {
    return this.list[i];
  };

  this.removeAt = function (i) {
    this.list = this.list.filter((_, index) => index !== i);
  };

  this.removeObserver = function (observer) {
    this.list = this.list.filter((element) => element !== observer);
  };
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeObserver(observer);
  }

  notify(context) {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
}

const subject = new Subject();

const observerAdd = (function () {
  let sum = 0;

  return {
    add(n) {
      sum += n;
    },
    reset() {
      sum = 0;
    },
    get() {
      return sum;
    },
    update(context) {
      this.add(context);
    },
    getName() {
      return 'Add';
    },
  };
})();

const observerMult = (function () {
  let product = 1;

  return {
    mult(n) {
      product *= n;
    },
    reset() {
      product = 1;
    },
    get() {
      return product;
    },
    update(context) {
      this.mult(context);
    },
    getName() {
      return 'Mult';
    },
  };
})();

// Add the two observers inside the subject
subject.addObserver(observerAdd);
subject.addObserver(observerMult);

const fibonacci = [1, 1, 2, 3, 5, 7, 13, 21];

console.log(
  '\x1b[33m%s\x1b[0m',
  'Notify all the observers with the first 8 numbers of the fibonacci sequence'
);

// Notify all the observers with the new contex value
fibonacci.forEach((n) => {
  subject.notify(n);
});

for (let i = 0; i < subject.observers.count(); i++) {
  console.log(
    `Result of the Observer ${subject.observers
      .get(i)
      .getName()}: ${subject.observers.get(i).get()}`
  );
}

subject.observers.removeObserver(observerMult);

console.log(
  '\x1b[33m%s\x1b[0m',
  '\nResults after the observerMult was removed'
);

for (let i = 0; i < subject.observers.count(); i++) {
  console.log(
    `Result of the Observer ${subject.observers
      .get(i)
      .getName()}: ${subject.observers.get(i).get()}`
  );
}
