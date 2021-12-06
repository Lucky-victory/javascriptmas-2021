const christmassifyBtn = document.querySelector('.christmassify-btn');
christmassifyBtn.addEventListener('click', christmassify);
const santaContainer = document.querySelector('.santa-container');
const christmasAudio = new Audio('./songs/happy-christmas-jingle.mp3');
const greeting=document.querySelector('.greeting');

function christmassify() {
  if (christmasAudio.paused) {
    christmasAudio.play();
    santaContainer.classList.add('show-santa');
    christmassifyBtn.textContent = 'de-christmassify';
    document.body.classList.add('christmassified')
  }
  else {
    christmasAudio.pause();
    christmasAudio.currentTime = 0;
    christmassifyBtn.textContent = 'christmassify';
    santaContainer.classList.remove('show-santa');
    document.body.classList.remove('christmassified');



  }
}
animateText()
function animateText(){
greeting.innerHTML=greeting.textContent.replace(/\S/g,'<span>$&</span>');
  const greetingSpans=document.querySelectorAll('.greeting span');
  greetingSpans.forEach((greetingSpan,i)=>{
    greetingSpan.style.animationDelay=`${i * 0.1}s`;
  });
}