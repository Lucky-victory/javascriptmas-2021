const container = document.querySelector('.container');
const playPauseBtn = document.querySelector('#play-pause-btn');
const forwardBtn = document.querySelector('#forward-btn');
const backwardBtn = document.querySelector('#backward-btn');
const playerImage = document.querySelector('.player-image')
const playerSongTitle = document.querySelector('.player-song-title');
const playPauseBtnSpan = document.querySelector('#play-pause-btn span');
const progressElem = document.querySelector('.progress')
const progressFillElem = document.querySelector('.progress-fill');
const playerTimeElasped = document.querySelector('.player-time-elasped');
const playerTimeTotal = document.querySelector('.player-time-total');
const volumeUpBtn=document.querySelector('#volume-up')
const volumeDownBtn=document.querySelector('#volume-down');
const volumePercentElem=document.querySelector('.volume-percent');
const player = new Audio();

volumeUpBtn.addEventListener('click',increaseVolume);
volumeDownBtn.addEventListener('click',decreaseVolume);
playPauseBtn.addEventListener('click', playOrPauseSong);
player.addEventListener('loadedmetadata',loadDuration);
player.addEventListener('timeupdate',updatePlayTime);
forwardBtn.addEventListener('click',nextSong);
backwardBtn.addEventListener('click',prevSong);
progressElem.addEventListener('click',seekPlayer);
let currentIndex=0;
  let volume=1;

const Musics = [
  {
    title: 'Joy to the world',
    cover: './images/christmas1.jpg',
    song: './songs/Joy_To_The_World.mp3'
  },
  {
    title: 'we wish you a merry christmas',
    cover: './images/christmas2.jpg',
    song: './songs/We_Wish_You_A_Merry_Christmas.mp3'
  },
  {
    title: 'Jingle Bells',
    cover: './images/christmas3.jpg',
    song: './songs/Jingle_Bells.mp3'
  },
  {
    title: 'santa claus is coming to town',
    cover: './images/christmas4.jpg',
    song: './songs/Santa_Claus_Is_Comin_To_Town.mp3'
  },
  ];


function loadSong(){
  player.src=Musics[currentIndex].song;
  player.load();
  playerImage.src=Musics[currentIndex].cover;
  playerSongTitle.textContent=Musics[currentIndex].title;
  
}
loadSong();
function loadDuration() {
  const {duration}=player;
  const minutes=Math.floor(duration / 60);
  let seconds=Math.floor(duration % 60);
  seconds= seconds < 10 ? '0'+seconds : seconds;
playerTimeTotal.textContent=`${minutes}:${seconds}`;
}
function updatePlayTime() {
  const {currentTime,duration} = player;
  const minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  playerTimeElasped.textContent = `${minutes}:${seconds}`;
   progressFillElem.style.width = ((currentTime / duration) * 100) + '%';
  
}

function playSong() {
  container.classList.add('playing');
  player.play();
  playPauseBtnSpan.className='fas fa-pause';
}

function pauseSong() {
  container.classList.remove('playing');
  player.pause();
  playPauseBtnSpan.className='fas fa-play';

}
function nextSong(){
  currentIndex++;
  if(currentIndex > Musics.length -1){
    currentIndex=0;
  }
  loadSong();
  playSong();
}
function prevSong(){
  currentIndex--;
  if(currentIndex < 0){
    currentIndex=Musics.length -1;
  }
  loadSong();
    playSong();

}
function playOrPauseSong() {
  if (container.classList.contains('playing')) {
    pauseSong();
  }
  else {
    playSong();
  }
}
function increaseVolume(){
 volume += 0.25;
 if (volume >=1 ) {
   volume = 1;
 }
 player.volume = volume;
 const percent = volume * 100;
 
 volumePercentElem.textContent = percent;
}
function decreaseVolume(){
  volume-=0.25;
  if(volume <= 0){
volume=0;
}
  player.volume=volume;
  const percent=volume * 100;
  
  volumePercentElem.textContent=percent;
}
function seekPlayer(evt) {
       const { duration, currentTime } = player;
       const { clientWidth } =progressElem;
       const { offsetX } = evt;
       const SEEKING_POINT = (offsetX / clientWidth) * duration;
       player.currentTime = SEEKING_POINT;
   }