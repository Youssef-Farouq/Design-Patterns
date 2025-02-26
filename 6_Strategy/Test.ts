const creditCardPayment = new CreditCardPayment("Youssef Farouq","1234-5678-9876");
const payPalPayment = new PayPalPayment("Youssef@example.com");

const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.executePayment(100);

paymentContext.setStrategy(payPalPayment);
paymentContext.executePayment(200);
