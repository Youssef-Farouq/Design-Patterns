const light = new TrafficLight();

// Red
console.log("Current Light:", light.getColor());

//Red to Green
light.change();

// Green
console.log("Current Light:", light.getColor());

//Green to Yellow
light.change();

// Yellow
console.log("Current Light:", light.getColor());

//Yellow to Red
light.change();

// Red
console.log("Current Light:", light.getColor());
