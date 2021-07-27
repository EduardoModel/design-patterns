// Example for the Factory Pattern

function Car({ doors, type, color, fuelType, currentState }) {
  this.doors = doors ?? 4;
  this.type = type ?? 'Sedan';
  this.color = color ?? 'Silver';
  this.fuelType = fuelType ?? 'Gasoline';
  this.currentState = currentState ?? 'New';
}

class Motorcycle {
  constructor({ color, transmissionType, engineDisplacement, motorType }) {
    this.color = color ?? 'Silver';
    this.trasmissionType = transmissionType ?? 'Chain';
    this.engineDisplacement = engineDisplacement ?? 400; // ccm
    this.motorType = motorType ?? 'Single';
  }
}

function Truck({ maxTorque, numberOfAxles, tankCapacity, enginePower }) {
  this.maxTorque = maxTorque ?? 450; // Nm
  this.numberOfAxles = numberOfAxles ?? 2;
  this.tankCapacity = tankCapacity ?? 200; // Liters
  this.enginePower = enginePower ?? 227; // kW
}

function VehicleFactory() {
  this.vehicleClass = Car;

  this.createVehicle = function (options) {
    if (!options.vehicleClass) {
      throw new Error('Vehicle class was not informed');
    }
    // This implementation is an example of the Open-closed principle
    const VehicleClass = options.vehicleClass;
    return new VehicleClass(options);
  };
}

const carData = {
  doors: 3,
  type: 'Sedan',
  color: 'Black',
  currentState: 'Used',
  vehicleClass: Car,
};

const vehicleFacotry = new VehicleFactory();

const car = vehicleFacotry.createVehicle(carData);

console.log('\x1b[33m%s\x1b[0m', 'Car example 🚗');
console.log(car);

const motorcycleData = {
  color: 'Blue',
  trasmissionType: 'Shaft',
  engineDisplacement: 850,
  motorType: 'Twins',
  vehicleClass: Motorcycle,
};

const motorcycle = vehicleFacotry.createVehicle(motorcycleData);

console.log('\x1b[33m%s\x1b[0m', '\nMotorcycle example 🏍');
console.log(motorcycle);

const truckData = {
  maxTorque: 680,
  numberOfAxles: 4,
  tankCapacity: 350,
  enginePower: 420,
  vehicleClass: Truck,
};

const truck = vehicleFacotry.createVehicle(truckData);

console.log('\x1b[33m%s\x1b[0m', '\nTruck example 🚚');
console.log(truck);
