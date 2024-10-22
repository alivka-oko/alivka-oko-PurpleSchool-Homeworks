"use strict";
function performTaskA() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1850, "success A");
  });
}

function performTaskB() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1630, "success B");
  });
}

function performTaskC() {
  return new Promise((_, reject) => {
    setTimeout(reject, 1680, new Error("error C"));
  });
}

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return resolve(undefined);
    }
    for (const promise of promises) {
      promise.then(resolve, reject);
    }
  });
}

(async () => {
  try {
    const result = await promiseRace([performTaskA(), performTaskB(), performTaskC()]);
    console.log(`Результат функции promiseRace: ${result}`);

    const race = await Promise.race([performTaskA(), performTaskB(), performTaskC()]);
    console.log(`Результат функции race: ${race}`);
  } catch (error) {
    console.error(error.message);
  }
})();
