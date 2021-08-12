// Example for the Proxy Pattern
function GoodsPriceAPI() {
  this.getPrice = function (good) {
    return new Promise(function (resolve, reject) {
      // To introduce a fake delay to the "API call"
      setTimeout(() => {
        switch (good) {
          case 'gold':
            resolve({
              price: 1753.76,
              unit: 'USD/t oz.',
            });
            break;
          case 'silver':
            resolve({
              price: 23.14,
              unit: 'USD/t oz.',
            });
            break;
          case 'platinum':
            resolve({
              price: 1025.57,
              unit: 'USD/t oz.',
            });
            break;
          case 'palladium':
            resolve({
              price: 2633.76,
              unit: 'USD/t oz.',
            });
            break;
          case 'aluminum':
            resolve({
              price: 2585.5,
              unit: 'USD/MT',
            });
            break;
          default:
            reject(new Error("The informed good wasn't found"));
        }
      }, 500);
    });
  };
}

function GoodsPriceAPIPRoxy() {
  this.cache = {};
  this.maxAge = 5000; // 5 Seconds

  this.getPrice = async function (good) {
    const goodsPrice = new GoodsPriceAPI();

    if (
      !this.cache[good] ||
      this.cache[good].createdAt + this.maxAge <= +new Date()
    ) {
      const result = await goodsPrice.getPrice(good);
      this.cache[good] = {
        good: result,
        createdAt: +new Date(),
      };
    }

    return this.cache[good].good;
  };
}

console.log('\x1b[33m%s\x1b[0m', 'Fetch the products from the API');

const metalPricesApi = new GoodsPriceAPIPRoxy();

// Faster version
Promise.all([
  metalPricesApi.getPrice('gold'),
  metalPricesApi.getPrice('palladium'),
  metalPricesApi.getPrice('aluminum'),
  metalPricesApi.getPrice('silver'),
]).then(console.log);

setTimeout(async () => {
  console.log('\x1b[33m%s\x1b[0m', '\nFetch the same products from the API');
  console.log(
    '\x1b[33m%s\x1b[0m',
    '(Note that the delivery speed is almost instantaneous)'
  );
  console.log(await metalPricesApi.getPrice('gold'));
  console.log(await metalPricesApi.getPrice('palladium'));
  console.log(await metalPricesApi.getPrice('aluminum'));
  console.log(await metalPricesApi.getPrice('silver'));
}, 500);
