// Example for the Builder Pattern
class Car {
  constructor(manufacturer, baseModel) {
    this.manufacturer = manufacturer;
    this.baseModel = baseModel;
    return this;
  }

  // Define another methods to add other values, if needed and avoiding to
  // overpopulate the constructor of the class
  setVIN(vin) {
    this.vin = vin;
    // This is the most important feature
    // Because when the this object is returned, more commands can be added
    // avoiding the call to the object again
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setCarClassification(carClassification) {
    this.carClassification = carClassification;
    return this;
  }

  getDetails() {
    const { manufacturer, baseModel, color, vin, carClassification } = this;
    return {
      manufacturer,
      baseModel,
      color,
      vin,
      carClassification,
    };
  }
}

console.log(
  '\x1b[33m%s\x1b[0m',
  'Class with methods to add different attributes'
);

const car = new Car('Audi', 'A4');

car.setVIN('AUDI123456789').setCarClassification('Sedan').setColor('Silver');

console.log(car.getDetails());

function SkodaFabiaDirector() {
  this.car = new Car('Skoda', 'Fabia');
  this.build = function () {
    this.car
      .setColor('Black')
      .setVIN('SKODA1234567')
      .setCarClassification('Hatch');
    return this.car;
  };
}

console.log(
  '\x1b[33m%s\x1b[0m',
  '\nUse of a director to encapsulate all the logic to build a Skoda Fabia'
);
const skodaDirector = new SkodaFabiaDirector();
const fabia = skodaDirector.build();

console.log(fabia);
