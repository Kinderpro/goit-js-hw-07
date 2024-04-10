const inputValue = document.querySelector('#name-input');
const text = document.querySelector('#name-output');



inputValue.addEventListener('input', onInput);

function onInput(evt) {
   
const textOuput = text.textContent = evt.currentTarget.value.trim();
if(textOuput == '') {
   return text.textContent = 'Anonymous';
}
};