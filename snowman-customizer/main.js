const innerEyeColorChanger=document.querySelector('#inner-eye-color');
const outerEyeColorChanger=document.querySelector('#outer-eye-color');
const buttonColorChanger=document.querySelector('#button-color');
const noseColorChanger=document.querySelector('#nose-color');
const handsColorChanger=document.querySelector('#hands-color');
const ribbonColorChanger=document.querySelector('#ribbon-color');
const mouthColorChanger=document.querySelector('#mouth-color');
const addRibbonBtn=document.querySelector('.add-ribbon-btn');
const addHandsBtn=document.querySelector('#add-hands-btn');
const rightHand=document.querySelector('.right-hand');
const lefttHand=document.querySelector('.left-hand');
const ribbon=document.querySelector('.snowman-ribbon')
addRibbonBtn.addEventListener('click',()=>{
      addRibbonBtn.textContent='add ribbon'

  ribbon.classList.toggle('show');
  if(ribbon.classList.contains('show')){
    addRibbonBtn.textContent='remove ribbon'
  }
});
addHandsBtn.addEventListener('click',()=>{
     addHandsBtn.textContent='add hands'

  rightHand.classList.toggle('show-hand')
  lefttHand.classList.toggle('show-hand');
  if(rightHand.classList.contains('show-hand')){
        addHandsBtn.textContent='remove hands'

  }
});

innerEyeColorChanger.addEventListener('change',(evt)=>{
  const color=evt.target.value;
  document.documentElement.style.setProperty('--inner-eye-color',color);
  
});
outerEyeColorChanger.addEventListener('change',(evt)=>{
  const color=evt.target.value;
  document.documentElement.style.setProperty('--outer-eye-color',color);
  
});
noseColorChanger.addEventListener('change',(evt)=>{
  const color=evt.target.value;
  document.documentElement.style.setProperty('--nose-color',color);
  
})
mouthColorChanger.addEventListener('change',(evt)=>{
  const color=evt.target.value;
  document.documentElement.style.setProperty('--mouth-color',color);
  
})
ribbonColorChanger.addEventListener('change',(evt)=>{
  const color=evt.target.value;
  document.documentElement.style.setProperty('--ribbon-color',color);
  
})
buttonColorChanger.addEventListener('change',(evt)=>{
  const color=evt.target.value;
  document.documentElement.style.setProperty('--button-color',color);
  
})
handsColorChanger.addEventListener('change',(evt)=>{
  const color=evt.target.value;
  document.documentElement.style.setProperty('--hands-color',color);
  
})