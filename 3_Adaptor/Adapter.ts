class UnitAdapter implements MetricSystem {
  private imperialSystem: ImperialSystem;

  constructor(imperialSystem: ImperialSystem) {
    this.imperialSystem = imperialSystem;
  }

  getLengthInMeters(): number {
    return this.imperialSystem.getLengthInFeet() * 0.3048;
  }

  getWeightInKilograms(): number {
    return this.imperialSystem.getWeightInPounds() * 0.453592;
  }
}

function displayMetricValues(lengthInFeet: number,weightInPounds: number): void {
  const imperialData = new ImperialSystem(lengthInFeet, weightInPounds);
  const metricData: MetricSystem = new UnitAdapter(imperialData);

  console.log(`Length in meters: ${metricData.getLengthInMeters()}`);
  console.log(`Weight in kilograms: ${metricData.getWeightInKilograms()}`);
}

displayMetricValues(10, 150);
