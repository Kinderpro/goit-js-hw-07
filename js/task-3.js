const inputValue = document.querySelector('#name-input');
const text = document.querySelector('#name-output');



inputValue.addEventListener('input', onIput);

function onIput(evt) {
   
text.textContent = evt.currentTarget.value;
if(text.textContent == '' || text.textContent == ' ') {
   return text.textContent = 'Anonymous';
}
};