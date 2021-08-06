// Example for the Visitor Pattern
const {
  internet,
  address: fakerAddress,
  name: fakerName,
  commerce,
} = require('faker');

function Visitor() {
  this.visitCustomer = function (customer) {
    console.log(
      `Visiting the custumer ${customer.name} that lives in the ${customer.address}. The contact email is ${customer.email}.`
    );
  };

  this.visitSeller = function (seller) {
    console.log(`Visiting the seller ${seller.name} (ID: ${seller.id}).`);
  };

  this.visitProduct = function (product) {
    console.log(
      `Visiting the product ${product.name} (ID: ${product.id}) costing per unit $ ${product.price} dollars and with ${product.quantity} units in stock.`
    );
  };
}

function Customer(name, email, address) {
  this.name = name;
  this.email = email;
  this.address = address;
  this.accept = function (visitor) {
    visitor.visitCustomer(this);
  };
}

function Seller(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.accept = function (visitor) {
    visitor.visitSeller(this);
  };
}

function Product(id, name, quantity, price) {
  this.id = id;
  this.name = name;
  this.quantity = quantity;
  this.price = price;
  this.accept = function (visitor) {
    visitor.visitProduct(this);
  };
}

console.log('\x1b[33m%s\x1b[0m', 'Define and populate the object arrays');

// Define the arrays with the objects
const customers = [];
const sellers = [];
const products = [];

// Populate them with the data generated from the faker library
for (let i = 0; i < 3; i++) {
  const customerFirstName = fakerName.firstName();
  const customerLastName = fakerName.lastName();
  customers.push(
    new Customer(
      `${customerFirstName} ${customerLastName}`,
      internet.email(customerFirstName, customerLastName),
      `${fakerAddress.streetName()} ${i + 42} ${fakerAddress.city()}`
    )
  );

  sellers.push(
    new Seller(
      i + 1,
      `${fakerName.firstName()} ${fakerName.lastName()}`,
      internet.email()
    )
  );

  products.push(
    new Product(i + 1, commerce.productName(), i + 6, commerce.price())
  );
}

const visitor = new Visitor();

console.log('\x1b[33m%s\x1b[0m', '\nVisit all the customers');

// Iterate through the elements calling the visitor for each of them
for (let i = 0; i < 3; i++) {
  customers[i].accept(visitor);
}

console.log('\x1b[33m%s\x1b[0m', '\nVisit all the sellers');

for (let i = 0; i < 3; i++) {
  sellers[i].accept(visitor);
}

console.log('\x1b[33m%s\x1b[0m', '\nVisit all the products');

for (let i = 0; i < 3; i++) {
  products[i].accept(visitor);
}
