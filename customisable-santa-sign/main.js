// Task: // - Write a function to update the Santa Stop Here sign with the user's own text. // Stretch goals // - Add a min and max length to the message. // - Add interchangeable emojis. // - Allow the user to customize the colors and other styling elements, too., 

const inputElem=document.querySelector('.input');
const errorMessage=document.querySelector('.error');
const sign=document.querySelector('.sign');
const emojiItems=document.querySelectorAll('.drop-down-emoji-item');
const themeItems=document.querySelectorAll('.drop-down-theme-item');
const signEmojis=document.querySelectorAll('.sign-emoji');
signEmojis.forEach((signEmoji)=>{
  signEmoji.addEventListener('click',(evt)=>{
    const target = evt.currentTarget;
    document.querySelector('.sign-emoji.selected').classList.remove('selected');
    target.classList.add('selected');
  });
})
themeItems.forEach((themeItem)=>{
  themeItem.addEventListener('click',(evt)=>{
    const target = evt.currentTarget;
    const {themeText,themeBg}=target.dataset;
    document.querySelector('.drop-down-theme-item.active-theme').classList.remove('active-theme');
    target.classList.add('active-theme');
    document.documentElement.style.setProperty('--main-theme-bg',themeBg)
    document.documentElement.style.setProperty('--main-theme-text',themeText)
  });
});
emojiItems.forEach((emojiItem)=>{
  emojiItem.addEventListener('click',(evt)=>{
    changeEmoji(evt);
  })
})
function renderSign(){
  if(inputElem.value.length < inputElem.min){
    return
  }
  if(inputElem.value.length > inputElem.maxLength){
    return;
  }
  sign.textContent=inputElem.value;
}

function changeEmoji(evt){
  const target=evt.currentTarget;
  const selectedSignEmoji=document.querySelector('.sign-emoji.selected');
  selectedSignEmoji.textContent=target.textContent;
  document.querySelector('.drop-down-emoji-item.active-emoji').classList.remove('active-emoji');
  target.classList.add('active-emoji');
}

function changeColor(){
  
}


inputElem.addEventListener('keyup',()=>{
  renderSign()
});
inputElem.addEventListener('blur',()=>{
  clearInput();
});
function clearInput(){
  inputElem.value='';
}