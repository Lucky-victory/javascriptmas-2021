const mainContainer = document.querySelector('.main-container');
const toggleSwitches = document.querySelectorAll('.toggle-switch');
toggleSwitches.forEach((toggleSwitch) => {
  toggleSwitch.addEventListener('click', () => {
    const checkedToggleSwitch = document.querySelector('.toggle-switch:checked');
    const chosenTheme = checkedToggleSwitch.dataset.theme;
    if (chosenTheme === 'snow') {
      mainContainer.classList.remove('christmas');
      mainContainer.classList.add('snow');

    }
    else{
      mainContainer.classList.remove('snow');
      mainContainer.classList.add('christmas');
    }
  })
})