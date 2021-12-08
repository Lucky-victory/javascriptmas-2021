const bellContainer=document.querySelector('.bell-container');
const playBtn=document.querySelector('#play-btn');
const pauseBtn=document.querySelector('#pause-btn');
const stopBtn=document.querySelector('#stop-btn');
const player=new Audio('./songs/jingle-bells.mp3');
playBtn.addEventListener('click',playSong)
pauseBtn.addEventListener('click',pauseSong);
stopBtn.addEventListener('click',stopSong);

function playSong() {
  player.play();
  bellContainer.classList.add('animate')
}
function pauseSong() {
  player.pause();
    bellContainer.classList.remove('animate')

}
function stopSong() {
  player.pause();
  player.currentTime=0;
    bellContainer.classList.remove('animate')

}