"use strict";

const page = {
  months: document.querySelector('[data-tag = "months"]'),
  days: document.querySelector('[data-tag = "days"]'),
  hours: document.querySelector('[data-tag = "hours"]'),
  minutes: document.querySelector('[data-tag = "minutes"]'),
  seconds: document.querySelector('[data-tag = "seconds"]'),
};

function startTimer() {
  const renderDOMTimer = () => {
    const now = new Date();
    const daysInMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0
    ).getDate();
    page.months.textContent = 12 - (now.getMonth() + 1);
    page.days.textContent = daysInMonth - now.getDate();
    page.hours.textContent = 23 - now.getHours();
    page.minutes.textContent = 59 - now.getMinutes();
    page.seconds.textContent = 59 - now.getSeconds();
  };

  setInterval(() => {
    renderDOMTimer();
  }, 1000);
}

startTimer();
