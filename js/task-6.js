const createBtn = document.querySelector("button[data-create]");
const destoroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

createBtn.addEventListener("click", createBoxes);

destoroyBtn.addEventListener("click", destoroyBoxes);

function createBoxes(amout) {
  amout = +input.value;
  if (amout >= 1 && amout <= 100) {
    for (let i = 0; i < amout; i++) {
      const box = document.createElement("div");

      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;

      boxes.classList.add("js-box");
      boxes.append(box);
    }
  }
};

function destoroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
