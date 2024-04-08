const refs = {
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
  body: document.querySelector('body')

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.btn.addEventListener("click", onClick);

function onClick() {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor;
};
