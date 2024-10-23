"use strict";

const container = document.querySelector(".container");
const counter = document.getElementById("counter");
let count = 0;

for (let i = 0; i < 5; i++) {
  const button = document.createElement("button");
  button.textContent = "Нажми на меня!";
  container.append(button);
}

container.addEventListener("click", function (e) {
  const currentElement = e.target;
  if (currentElement.tagName != "BUTTON") {
    return;
  }
  changeTextButton(e.target);
});

function changeTextButton(pressedButton) {
  const oldPressedButton = document.querySelector("[clicked = true]");
  if (!pressedButton.hasAttribute("clicked")) {
    addCount();
  }
  if (oldPressedButton) {
    document.querySelector("[clicked = true]").removeAttribute("clicked");
    oldPressedButton.textContent = "Нажми на меня!";
  }
  pressedButton.setAttribute("clicked", "true");
  pressedButton.textContent = "Нажата!";
}

function addCount() {
  counter.textContent = `Счётчик нажатий: ${++count}`;
}
