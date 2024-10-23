"use strict";

const infoMessage = document.getElementById("infoMessage");

function getUserPosition() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(resolve, (error) => {
        reject(new Error("Невозможно получить ваше местоположение"));
      });
    } else {
      reject(new Error("Геолокация не поддерживается вашим браузером"));
    }
  });
}

function isExist(data, errorMessage = "Не существует") {
  if (!data) {
    throw new Error(`${errorMessage}`);
  }
  return data;
}

getUserPosition()
  .then(({ coords }) => {
    isExist(coords, "Свойство не найдено"),
      (infoMessage.textContent = `Ваши координаты: ш. ${coords.latitude}, д. ${coords.longitude}`);
  })
  .catch((error) => (infoMessage.textContent = error.message))
  .finally(() => console.log("Выполнено"));
