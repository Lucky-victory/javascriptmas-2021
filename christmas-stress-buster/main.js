const outerCircleMinutes=document.querySelector('.outer-circle.minutes')
const outerCircleSeconds=document.querySelector('.outer-circle.seconds');
const minutesCounter=document.querySelector('.minutes-counter');
const secondsCounter=document.querySelector('.seconds-counter');
const audio=new Audio('./files/melody-of-nature.mp3');
const video=document.querySelector('.video');
const resetBtn=document.querySelector('.reset-btn');
const busterBtn=document.querySelector('.buster-btn');
const btnsInnerContainer=document.querySelector('.btns-inner-container');

let intervalId=null;
const interval=1000;
const milliseconds=1200;
let minutesInMilliseconds= (60 *milliseconds) * 2;
let minutes=Math.floor((minutesInMilliseconds/1000)/60);
let seconds=Math.floor((minutesInMilliseconds/1000)%60);
const totalCircleLength=380;


function triggerTimer(){
  intervalId=setInterval(()=>{
    if(minutesInMilliseconds <= 0){
      clearInterval(intervalId);
      stopAudio();
      stopVideo();
      return;
    }
    minutesInMilliseconds-=1000;
    

  setCounter();

  },interval);
  playVideo();
  playAudio();
 btnsInnerContainer.classList.add('moveUp')
}
function setCounter(){
  minutes = Math.floor((minutesInMilliseconds / 1000) / 60);
  seconds = Math.floor((minutesInMilliseconds / 1000) % 60);
  outerCircleMinutes.style.strokeDashoffset = totalCircleLength - (totalCircleLength / 2) * minutes;
  outerCircleSeconds.style.strokeDashoffset= totalCircleLength - (totalCircleLength / 60) * seconds;
  minutes=minutes < 10 ? '0'+minutes : minutes;
  seconds=seconds < 10 ? '0'+seconds : seconds;
  minutesCounter.textContent=minutes;
  secondsCounter.textContent=seconds;
  
}
setCounter();

function resetTimer(){
 clearInterval(intervalId);
 minutesInMilliseconds= (60 * milliseconds) * 2;
 stopAudio();
 stopVideo();
 setCounter();
 btnsInnerContainer.classList.remove('moveUp');
}

function playAudio(){
  audio.play()
}
function stopAudio(){
  audio.pause();
  audio.currentTime=0;
}
function playVideo(){
  video.play()
}
function stopVideo(){
video.pause();
  video.currentTime=0;
}


busterBtn.addEventListener('click',()=>{
  triggerTimer();
});
resetBtn.addEventListener('click',()=>{
  resetTimer();
});