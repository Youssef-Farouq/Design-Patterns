let coffee: Coffee = new SimpleCoffee();
console.log(`${coffee.description()} - $${coffee.cost()}`); 
//Simple Coffee $5

coffee = new MilkDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`); 
//Simple Coffee with Milk $7

coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()} - $${coffee.cost()}`); 
//Simple Coffee with Milk and Sugar $8
