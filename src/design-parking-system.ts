type CarType = 1 | 2 | 3;
const isCarType = (n: number): n is CarType =>
  n >= 1 && n <= 3 && Number.isInteger(n);

class ParkingSystem {
  private capacity: Record<CarType, number>;
  private usage: Record<CarType, number>;

  constructor(big: number, medium: number, small: number) {
    this.capacity = {
      1: big,
      2: medium,
      3: small,
    };
    this.usage = {
      1: 0,
      2: 0,
      3: 0,
    };
  }

  addCar(carType: number): boolean {
    if (isCarType(carType)) {
      if (this.usage[carType] < this.capacity[carType]) {
        this.usage[carType] += 1;
        return true;
      }
      return false;
    } else {
      throw new Error("Invalid input");
    }
  }
}
