/*
Функция валидации возраста (true если больше 14)
*/

"use strict";
function isOlderThan14(date) {
  const now = new Date();
  const userDate = new Date(date);
  const controlDate = new Date(
    ` ${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear() - 14}`
  );
  return userDate < controlDate;
}

console.log(isOlderThan14("09-14-2010")); // true
console.log(isOlderThan14("09-14-2011")); // false
