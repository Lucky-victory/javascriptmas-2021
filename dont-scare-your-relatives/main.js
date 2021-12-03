const greetingElem=document.querySelector('#greeting');
const fixBtn=document.querySelector('#btn');
let isPlaying=true;
greetingElem.innerHTML=greetingElem.textContent.replace(/\S/g,'<span class="bounce bubble">$&</span>');

const bounceElems=document.querySelectorAll('.bounce');
bounceElems.forEach((bounceElem,i)=>{
  bounceElem.style.animationDelay=`${i * 0.2}s`
});

fixBtn.addEventListener('click',()=>{
  fixGreeting()
  setTimeout(()=>{
    
  stopAnimate();
  },1500)
});

function fixGreeting(){
  greetingElem.classList.add('fix');
  fixBtn.innerHTML='<span></span><span></span>'
}
function stopAnimate(){
  bounceElems.forEach((bounceElem) => {
    isPlaying=!isPlaying;
    fixBtn.textContent=isPlaying ? 'pause' : 'play'
    bounceElem.classList.toggle('paused');
  });
}