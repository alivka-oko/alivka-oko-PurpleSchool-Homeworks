/*
Разработать функцию для симуляции броска многогранника (Дайса) различных типов, 
используемого в настольных играх, таких как Dungeons and Dragons.
*/

"use strict";
function diceRoll(type) {
  const UpperCaseType = type.toUpperCase();
  const supportedTypes = ["D4", "D6", "D8", "D10", "D12", "D16", "D20"];
  if (!supportedTypes.includes(UpperCaseType)) {
    return "Не поддерживаемый тип";
  }
  const NumberType = Number(type.substring(1));
  const randomResult = Math.floor(Math.random() * NumberType + 1);
  return randomResult;
}
console.log(diceRoll("D6"));
console.log(diceRoll("D5"));
