class Transport_Factory {
  static createVehicle(type: string, name: string): Transport {
    const lowerType = type.toLowerCase();

    if (lowerType === "car") {
      return new Car(name);
    }

    if (lowerType === "bike") {
      return new Bike(name);
    }
    
    if (lowerType === "bus") {
      return new Bus(name);
    }

    throw new Error(`Unknown transport type: ${type}`);
  }
}
