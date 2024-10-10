"use stirct";

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.speak = function () {
  console.log(`Я ${this.name}, и мой язык: ${this.language}`);
};

const Ork = function (name, language, weapon) {
  Character.call(this, "Орк", name, language);
  this.weapon = weapon;
  this.spellSet = {
    lastId: 1,
    spells: [],
  };
};

Ork.prototype = new Character();

Ork.prototype.hit = function () {
  console.log(`${this.name} атакует с помощью ${this.weapon}!`);
};

Ork.prototype.castSpell = function (spellObject) {
  const isExists = this.spellSet.spells.find(
    (spell) => spellObject.id == spell.id
  );
  if (!isExists) {
    console.log(`${this.name} кастовал несуществующее заклинание!`);
    return;
  }

  console.log(`${this.name} использует заклинание ${spellObject.name}!`);
};

Ork.prototype.createSpell = function (spellName) {
  const isExists = this.spellSet.spells.find(
    (spell) => spellName == spell.name
  );
  if (isExists) {
    console.log(`${this.name} уже создавал заклинание ${spellName}!`);
    return;
  }
  const spell = {
    id: this.spellSet.lastId,
    name: spellName,
  };
  this.spellSet.lastId++;
  this.spellSet.spells.push(spell);
  console.log(`${this.name} создает новое заклинание ${spellName}!`);
};

const ork1 = new Ork("Аркадий", "Орочий", "Моргенштерн");
const spell = {
  id: 1,
  name: "Апчихба",
};
const spell2 = {
  id: 1,
  name: "Огненный вихрь",
};

ork1.speak();
ork1.castSpell(spell);
ork1.createSpell("Огненный вихрь");
ork1.createSpell("Огненный вихрь");
ork1.castSpell(spell2);
