interface TrafficLightState {
    next(light: TrafficLight): void;
    getColor(): string;
  }