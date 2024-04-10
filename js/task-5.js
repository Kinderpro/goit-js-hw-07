const refs = {
  changeColorButton: document.querySelector(".change-color"),
  colorSpan: document.querySelector(".color"),
  bodyElement: document.querySelector('body')

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.changeColorButton.addEventListener("click", onClick);

function onClick() {
  const randomColor = getRandomHexColor();
  refs.bodyElement.style.backgroundColor = randomColor;
  refs.colorSpan.textContent = randomColor;
};
