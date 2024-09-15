// уникализации массива объектов с помощью Set

/* Сама не додумалась но верного решения с комбинацией Set с другими методами, такими как map и find
поэтому предлагаю свой (решение через map + find уже подглядела, но решила не использовать)  
*/
"use strict";

const users = [
  { id: 1, name: "sada" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 1, name: "Катя" },
];

const setUsers = new Set();

users.forEach((user) => {
  if (![...setUsers].some((item) => item.id === user.id)) {
    setUsers.add(user);
  }
});
console.log("----- Уникальные id -----");
console.log(setUsers);
