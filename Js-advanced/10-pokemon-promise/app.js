"use strict";
function getData(url, errorMessage, method = "GET") {
  return fetch(url, {
    method,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMessage}: ${response.status}.`);
    }
    return response.json();
  });
}

function isExist(data, errorMessage = "Не существует") {
  if (!data) {
    throw new Error(errorMessage);
  }
  return data;
}

getData("https://pokeapi.co/api/v2/pokemon/ditto", "Не удалось получить")
  .then(({ abilities }) => {
    return isExist(abilities, "Способности не найдены")[0];
  })
  .then((data) => getData(data.ability.url, "Нет информации"))
  .then((data) => {
    console.log(isExist(data?.effect_entries[1]?.effect, "Эффект не найден"));
  })
  .catch((error) => {
    const el = document.getElementById("infoMessage");
    el.textContent = error.message;
  });
