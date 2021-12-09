const house=document.querySelector('.house');
const decoratorSwitch=document.querySelector('.decorator-switch');
decoratorSwitch.addEventListener('click',decorateHouse);

function decorateHouse() {
  decoratorSwitch.checked ? house.classList.add('decorate') : house.classList.remove('decorate');
}