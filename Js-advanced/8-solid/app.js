"use stirct";

class Billing {
  #amount;
  constructor(amount) {
    this.#amount = amount;
  }
  CalculateTotal() {
    return this.#amount;
  }
  get amount() {
    return this.#amount;
  }
}

class FixedBilling extends Billing {
  CalculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }
  CalculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    this.items = items;
  }
  CalculateTotal() {
    return this.amount * this.items;
  }
}

const fixedBil = new FixedBilling(100);
const hourBill = new HourBilling(100, 4);
const itemBill = new ItemBilling(100, 2);

console.log(fixedBil.CalculateTotal()); //100
console.log(hourBill.CalculateTotal()); // 400
console.log(itemBill.CalculateTotal()); // 200
