"use strict";

const page = {
  months: document.querySelector('[data-tag = "months"]'),
  days: document.querySelector('[data-tag = "days"]'),
  hours: document.querySelector('[data-tag = "hours"]'),
  minutes: document.querySelector('[data-tag = "minutes"]'),
  seconds: document.querySelector('[data-tag = "seconds"]'),
};

function renderDOMTimer() {
  const now = new Date();
  page.months.textContent = 12 - (now.getMonth() + 1);
  page.days.textContent = 31 - now.getDate();
  page.hours.textContent = 23 - now.getHours();
  page.minutes.textContent = 59 - now.getMinutes();
  page.seconds.textContent = 59 - now.getSeconds();
}

(() => {
  setInterval(() => {
    renderDOMTimer2();
  }, 1000);
})();

function renderDOMTimer2() {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);

  const diff = new Date(newYear - now);
  const month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const allDays = diff / (1000 * 60 * 60 * 24);
  const days = Math.floor(allDays - month * 30 - 1);
  const [hour, minute, second] = [
    23 - now.getHours(),
    59 - now.getMinutes(),
    59 - now.getSeconds(),
  ];

  page.months.textContent = month;
  page.days.textContent = days;
  page.hours.textContent = hour;
  page.minutes.textContent = minute;
  page.seconds.textContent = second;
}
