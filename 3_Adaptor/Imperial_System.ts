class ImperialSystem {
  private lengthInFeet: number;
  private weightInPounds: number;

  constructor(lengthInFeet: number, weightInPounds: number) {
    this.lengthInFeet = lengthInFeet;
    this.weightInPounds = weightInPounds;
  }

  getLengthInFeet(): number {
    return this.lengthInFeet;
  }

  getWeightInPounds(): number {
    return this.weightInPounds;
  }
}