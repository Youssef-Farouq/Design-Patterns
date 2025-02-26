//Red
class RedLight implements TrafficLightState {
  next(light: TrafficLight): void {
    console.log("Changing from Red to Green.");
    light.setState(new GreenLight());
  }

  getColor(): string {
    return "Red";
  }
}

//Green
class GreenLight implements TrafficLightState {
  next(light: TrafficLight): void {
    console.log("Changing from Green to Yellow.");
    light.setState(new YellowLight());
  }

  getColor(): string {
    return "Green";
  }
}

//Yellow
class YellowLight implements TrafficLightState {
  next(light: TrafficLight): void {
    console.log("Changing from Yellow to Red.");
    light.setState(new RedLight());
  }

  getColor(): string {
    return "Yellow";
  }
}
