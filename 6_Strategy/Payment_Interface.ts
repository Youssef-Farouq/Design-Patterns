interface PaymentStrategy {
  pay(amount: number): void;
}