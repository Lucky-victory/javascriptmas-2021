const outerCircleSeconds=document.querySelector('.seconds-outer');
const outerCircleMinutes=document.querySelector('.minutes-outer');
const outerCircleHours=document.querySelector('.hours-outer');
const outerCircleDays=document.querySelector('.days-outer');
const timerSeconds=document.querySelector('.timer.seconds');
const timerMinutes=document.querySelector('.timer.minutes');
const timerHours=document.querySelector('.timer.hours');
const timerDays=document.querySelector('.timer.days');
const circleTotalLength=380;
const christmasDate='2021-12-25T00:00:00';
const christmasDay=new Date(christmasDate).getTime();
const intervalId=setInterval(()=>{
const today=new Date().getTime();
  const timeDiff= christmasDay - today;
  const time=new Date(timeDiff);
  
  if (timeDiff <= 0) {
    clearInterval(intervalId);
    return;
  }
setTimerSeconds(time);
  setTimerMinutes(time);
  setTimerHours(time);
  setTimerDays(time,timeDiff);
  
},1000);

function setTimerSeconds(time){
  const sec = new Date(time).getSeconds();
  
  const secondsPercent = circleTotalLength - (circleTotalLength / 60) * sec
  
  timerSeconds.textContent = sec < 10 ? '0' + sec : sec;
  
  outerCircleSeconds.style.strokeDashoffset = secondsPercent;
}
function setTimerMinutes(time){
const min = new Date(time).getMinutes();

const minutesPercent = circleTotalLength - (circleTotalLength / 60) * min

timerMinutes.textContent = min < 10 ? '0' + min : min;

outerCircleMinutes.style.strokeDashoffset = minutesPercent
}
function setTimerHours(time){
const hr= new Date(time).getHours() -1;
const hoursPercent = circleTotalLength - (circleTotalLength / 24) * hr

timerHours.textContent = hr;

outerCircleHours.style.strokeDashoffset = hoursPercent
}
function setTimerDays(time,timeDiff){
  const oneDay = 24 * 60 * 60 * 1000;
  const days= Math.floor(timeDiff / oneDay);
const daysPercent = circleTotalLength - (circleTotalLength / 30) * days

timerDays.textContent = days;

outerCircleDays.style.strokeDashoffset = daysPercent
}