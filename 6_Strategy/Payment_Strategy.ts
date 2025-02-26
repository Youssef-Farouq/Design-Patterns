class CreditCardPayment implements PaymentStrategy {
  constructor(private name: string, private cardNumber: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card (${this.cardNumber}).`);
  }
}

class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal (${this.email}).`);
  }
}
