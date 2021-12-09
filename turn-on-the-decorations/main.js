const house=document.querySelector('.house');
const decoratorSwitch=document.querySelector('.decorator-switch');
const decoratorLabel=document.querySelector('.decorator-label');
decoratorSwitch.addEventListener('click',decorateHouse);

function decorateHouse() {
  decoratorSwitch.checked ? house.classList.add('decorate') : house.classList.remove('decorate');
  decoratorSwitch.checked ? decoratorLabel.textContent ='Turn off Decorations' : decoratorLabel.textContent ='Turn on Decorations'
}