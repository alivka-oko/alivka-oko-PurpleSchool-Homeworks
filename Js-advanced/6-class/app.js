// Задача: Создать класс для автомобиля.
"use stirct";
class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  get info() {
    console.log(`Марка: ${this.#brand}`);
    console.log(`Модель: ${this.#model}`);
    console.log(`Пробег: ${this.#mileage}`);
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(value) {
    this.#mileage = value;
  }
}

const mers = new Car("BMW", "X5", 81658);
mers.mileage = 94221;
console.log(mers.mileage);
mers.info;
