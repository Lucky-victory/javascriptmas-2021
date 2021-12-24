const launchBtn = document.querySelector('.launch-btn');
const crew = document.querySelector('.crew-container');
const audio = new Audio('./files/Audience.mp3');
const countdownElem = document.querySelector('.countdown');
let countdownTimer = 3;
countdownElem.textContent='0'+countdownTimer;
let intervalId=null;
launchBtn.addEventListener('click', () => {
  
  
  intervalId = setInterval(() => {
    if (countdownTimer <= 0) {
      audio.currentTime = 1;
      audio.play();
    
      crew.classList.add('launch');
      clearInterval(intervalId);
    
      return;
    }
    countdownTimer-=1;
    countdownElem.textContent = '0' + countdownTimer;
  }, 1000);


});
crew.addEventListener('animationend', () => {
  setTimeout(() => {

    audio.pause();
    audio.currentTime = 0;
    countdownTimer=3;
    countdownElem.textContent='0'+countdownTimer;
    crew.classList.remove('launch');
    intervalId=null;
  }, 1000)
});