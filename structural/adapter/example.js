// Example for the Adapter Pattern
const { commerce } = require('faker');

const products = [];

for (let i = 0; i < 10; i++) {
  products.push({
    name: commerce.productName(),
    price: commerce.price(),
    currency: 'EUR',
  });
}
console.log('\x1b[33m%s\x1b[0m', 'List the products in the original form');
console.log(products);

function productLister(product) {
  console.log(`Product: ${product.name} costs $ ${product.price} + taxes`);
}

function ProductAdapter() {
  const EurToDolConversionRate = 1.17;

  this.convertProductCurrency = function (product) {
    return {
      name: product.name,
      price: (product.price * EurToDolConversionRate).toFixed(2),
      currency: 'USD',
    };
  };
}

const converter = new ProductAdapter();

console.log('\x1b[33m%s\x1b[0m', '\nShow the converted products');

products.forEach((product) => {
  productLister(converter.convertProductCurrency(product));
});
