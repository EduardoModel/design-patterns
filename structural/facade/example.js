// Example for the Facade Pattern

const deliveryPizza = (function () {
  let pizzaName = '';

  function prepareDough() {
    console.log(`Preparing the pizza dough`);
  }

  function addIngredients() {
    console.log(`Adding the necessary ingredientes for a pizza ${pizzaName}`);
  }

  function bake() {
    console.log(`Baking the pizzaa ${pizzaName}`);
  }

  function notifyKitchen() {
    console.log(`A pizza ${pizzaName} will be prepared`);
    prepareDough();
    addIngredients();
    bake();
  }

  function notifyDeliverer() {
    console.log(`The pizza ${pizzaName} will be delivered`);
  }

  function informAddress() {
    console.log('Informing the delivery address to the delivery man');
  }

  function giveEnoughMoneyToChange() {
    console.log('Giving $ 50 bucks to the delivery man');
  }

  function giveCardMachine() {
    console.log('Giving the card machine to the delivery man');
  }

  function sendPizzaToBeDelivered() {
    notifyDeliverer();
    informAddress();
    giveEnoughMoneyToChange();
    giveCardMachine();
  }

  return {
    orderPizza(pizza) {
      pizzaName = pizza;
      console.log('\x1b[33m%s\x1b[0m', 'Notifying the kitchen about the order');
      notifyKitchen();
      console.log('\x1b[33m%s\x1b[0m', '\nNotifying the delivery man');
      sendPizzaToBeDelivered();
    },
  };
})();

deliveryPizza.orderPizza('Diavolo');
