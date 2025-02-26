class Car implements Transport {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is driving on the road.`);
  }
}

class Bike implements Transport {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is riding on the street.`);
  }
}

class Bus implements Transport {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is picking up passengers.`);
  }
}