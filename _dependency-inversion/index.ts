class Store {
  // stripe: any;
  paypal: any;
  constructor(user) {
    // this.stripe = new Stripe(user);
    this.paypal = new Paypal()
  }

  purchaseBike (quantity) {
    // this.stripe.makePayment(200 * quantity)
    this.paypal.makePayment('Jane', 200 * quantity)
  }

  purchaseHelmet (quantity) {
    this.paypal.makePayment('Jane', 15 * quantity)
  }
}

class Stripe {
  user: string;
  constructor(user) {
    this.user = user
  }

  makePayment (amount) {
    console.log(`${this.user} made a payment of ${amount} with stripe`)
  }
}

class Paypal {
  makePayment (user, amount) {
    console.log(`${user} made a payment of ${amount} with Paypal`)
  }
}

const store = new Store('John');
store.purchaseBike(10);
store.purchaseHelmet(10);


/** DEPENDENCY INVERSION **/

class Store2 {
  paymentProcessor: any;

  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor
  }

  purchaseBike (quantity) {
    this.paymentProcessor.pay(200 * quantity)
  }

  purchaseHelmet (quantity) {
    this.paymentProcessor.pay(15 * quantity)
  }
}


class StripePaymentProcessor {
  stripe: any;
  constructor(user) {
    this.stripe = new Stripe2(user)
  }

  pay (amount) {
    this.stripe.makePayment(amount)
  }
}

class Stripe2 {
  user: string;
  constructor(user) {
    this.user = user
  }
  makePayment (amount) {
    console.log(`${this.user} made a payment of ${amount} with stripe`)
  }
}

const store2 = new Store2(new StripePaymentProcessor('John'));
store2.purchaseBike(10);
store2.purchaseHelmet(10);

class PaypalPaymentProcessor {
  paypal: any;
  user: string;
  constructor(user) {
    this.paypal = new Paypal2()
    this.user = user;
  }

  pay (amount) {
    this.paypal.makePayment(this.user, amount)
  }
}

class Paypal2 {
  makePayment (user, amount) {
    console.log(`${user} made a payment of ${amount} with Paypal`)
  }
}

const store3 = new Store2(new PaypalPaymentProcessor('John'));
store3.purchaseBike(10);
store3.purchaseHelmet(10);
