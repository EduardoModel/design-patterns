// Example for the Decorator Pattern
function Motherboard(name) {
  this.name = name;

  this.getSpecs = function () {
    return `Motherboard: ${this.name}`;
  };

  this.getSpecsObject = function () {
    return {
      motherboard: this.name,
    };
  };

  this.getPrice = function () {
    return 129.99;
  };
}

function Decorator16GbMemory(motherboard) {
  this.motherboard = motherboard;
  this.memory = 16; // Gb

  this.getSpecs = function () {
    return `${motherboard.getSpecs()}, Memory: ${this.memory} Gb`;
  };

  this.getSpecsObject = function () {
    return {
      ...this.motherboard.getSpecsObject(),
      memory: this.memory,
    };
  };

  this.getPrice = function () {
    return motherboard.getPrice() + 99;
  };
}

function DecoratorGraphicCard(motherboard) {
  this.motherboard = motherboard;
  this.graphicCard = 'RTX 2080';

  this.getSpecs = function () {
    return `${motherboard.getSpecs()}, Graphic Card: ${this.graphicCard}`;
  };

  this.getSpecsObject = function () {
    return {
      ...this.motherboard.getSpecsObject(),
      graphicCard: this.graphicCard,
    };
  };

  this.getPrice = function () {
    return motherboard.getPrice() + 499;
  };
}

function DecoratorPowerSupply(motherboard) {
  this.motherboard = motherboard;
  this.powerSupply = 'Corsair XY-W 1500';

  this.getSpecs = function () {
    return `${motherboard.getSpecs()}, Power Supply: ${this.powerSupply}`;
  };

  this.getSpecsObject = function () {
    return {
      ...this.motherboard.getSpecsObject(),
      powerSupply: this.powerSupply,
    };
  };

  this.getPrice = function () {
    return motherboard.getPrice() + 199.99;
  };
}

console.log(
  '\x1b[33m%s\x1b[0m',
  'Build a computer using all the necessary decorators'
);

const computer = new DecoratorPowerSupply(
  new DecoratorGraphicCard(
    new Decorator16GbMemory(new Motherboard('EVO A54R12X0-1'))
  )
);

console.log('\x1b[33m%s\x1b[0m', `\nAll the specs: ${computer.getSpecs()}`);

console.log('\x1b[33m%s\x1b[0m', `\nTotal price: $ ${computer.getPrice()}`);

console.log('\x1b[33m%s\x1b[0m', '\nAll the specs as object');
console.log(computer.getSpecsObject());
