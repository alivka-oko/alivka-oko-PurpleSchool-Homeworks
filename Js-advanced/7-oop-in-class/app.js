"use stirct";

class Character {
  #health;

  constructor(race, name, health, language) {
    this.race = race;
    this.name = name;
    this.#health = health;
    this.language = language;
  }

  get health() {
    return this.#health;
  }
  takeDamage(value) {
    this.#health -= value;
  }

  speak() {
    console.log(`Я ${this.name}, и мой язык: ${this.language}`);
  }
}

class Orc extends Character {
  constructor(name, language, weapon) {
    super("Орк", name, 150, language);
    this.weapon = weapon;
  }

  speak() {
    console.log(`Я грозный Орк - ${this.name} и мой язык: ${this.language}`);
  }

  hit(enemy) {
    if (!(enemy instanceof Character)) {
      return;
    }
    console.log(
      `${this.name} атаковал ${enemy.name} с помощью ${this.weapon.name} и нанес ${this.weapon.damage} урона`
    );
    enemy.takeDamage(this.weapon.damage);
  }
}

class Elf extends Character {
  spellSet = {
    lastId: 0,
    spells: [],
  };

  constructor(name, language, spell) {
    super("Эльф", name, 70, language);
    this.spell = spell;
  }

  set spell(spell) {
    this.addSpell(spell);
  }

  speak() {
    console.log(`Я могучий Эльф - ${this.name} и мой язык: ${this.language}`);
  }

  addSpell(spell) {
    if (!(typeof spell === "object" && !Array.isArray(spell) && spell !== null)) {
      return;
    }

    const isExist = this.spellSet.spells.find((spellItem) => spellItem.name == spell.name)
      ? true
      : false;

    if (!isExist) {
      this.spellSet.spells.push({
        id: this.spellSet.lastId++,
        ...spell,
      });
      return true;
    }
    return false;
  }
  castSpell(enemy, spellId = 0) {
    if (!(enemy instanceof Character) || !(this.spellSet.spells.length !== 0)) {
      return;
    }
    const chosenSpell = this.spellSet.spells.find((spell) => spell.id === spellId);
    if (!chosenSpell) {
      return;
    }
    console.log(
      `${this.name} атаковал ${enemy.name} с помощью ${chosenSpell.name} и нанес ${Math.abs(
        chosenSpell.damage
      )} урона`
    );
    enemy.takeDamage(chosenSpell.damage);
  }
}

const weapon = {
  name: "Бита",
  damage: 20,
};

const spell = {
  name: "Вихревой огонь",
  damage: 25,
};

const orc = new Orc("Гришнак", "Чёрная речь", weapon);
orc.speak();
const elf = new Elf("Леголас", "Синдарин", spell);
elf.speak();

orc.hit(elf);
console.log(elf);

elf.castSpell(orc);
console.log(orc);
