/*
Разработать функцию для симуляции броска многогранника (Дайса) различных типов, 
используемого в настольных играх, таких как Dungeons and Dragons.
*/

"use strict";
function diceRoll(type) {
  const upperCaseType = type.toUpperCase();
  const supportedTypes = {
    D4: 4,
    D6: 6,
    D8: 8,
    D10: 10,
    D12: 12,
    D16: 16,
    D20: 20,
  };
  if (!(upperCaseType in supportedTypes)) {
    return "Не поддерживаемый тип";
  }
  const max = supportedTypes[upperCaseType];
  return Math.floor(Math.random() * max + 1);
}
console.log(diceRoll("D6"));
console.log(diceRoll("D5"));
