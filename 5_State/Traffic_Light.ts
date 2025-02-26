class TrafficLight {
    private state: TrafficLightState;
  
    constructor() {
      // Initial state Red
      this.state = new RedLight();
    }
  
    // Change state
    setState(state: TrafficLightState): void {
      this.state = state;
    }
  
    // Move to the next state
    change(): void {
      this.state.next(this);
    }
  
    // Get the current light color
    getColor(): string {
      return this.state.getColor();
    }
  }
  