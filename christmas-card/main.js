const card=document.querySelector('.card');
const cardContent=document.querySelector('.card-content');
const changeMessageBtn=document.querySelector('.change-message-btn');
const changeFontBtn=document.querySelector('.change-font-btn');
const downloadCardBtn=document.querySelector('.download-card-btn');
const receiverNameInput=document.querySelector('#receiver-name');
const cardReceiverName=document.querySelector('.card-receiver-name');
const senderNameInput=document.querySelector('#sender-name');
const cardSenderName=document.querySelector('.card-sender-name');
const miniCards=document.querySelectorAll('.mini-card');
const h2c=html2canvas;
const christmasMessages=["May the light of love shine upon you, and may your life be filled with blessings in this Christmas season.","On this joyous day, and throughout the coming year, may your life be filled with good luck and prosperity.","Merry Christmas and may you live a long and happy life filled with goodwill and friendship.","Wishing you a joyful Christmas! I won’t forget all the great times we shared during our favorite time of the year.","May this new year bring you peace and tranquility, and as you walk your path may it bring you contentment."];
const googleFonts=["'Meow Script', cursive","'Tangerine', cursive","'Nunito', sans-serif","'Gowun Bantang', serif","'Raleway',sans-serif",
"'Mountains Of Christmas', sans-serif"];
miniCards.forEach((miniCard)=>{
  miniCard.addEventListener('click',changeCardBackground)
})

senderNameInput.addEventListener('keyup',()=>{
  cardSenderName.textContent=senderNameInput.value;
});
receiverNameInput.addEventListener('keyup',()=>{
  cardReceiverName.textContent=receiverNameInput.value;
});
senderNameInput.addEventListener('blur',()=>{
  senderNameInput.value='';
});
receiverNameInput.addEventListener('blur',()=>{
  receiverNameInput.value='';
});

downloadCardBtn.addEventListener('click',downloadCard);


function downloadCard(){
  let base64String;
  const cardSenderNameText=cardSenderName.textContent.toLowerCase().split(' ').join('-');
  
h2c(card).then((canvas)=>{
  base64String=canvas.toDataURL('image/png');
  downloadCardBtn.setAttribute('download',`christmas_card_from-${cardSenderNameText}.png`);
  downloadCardBtn.setAttribute('href',base64String)
});

}

function changeCardBackground(evt){
  const activeMiniCard=document.querySelector('.mini-card.active');
  activeMiniCard.classList.remove('active');
  const clickedMiniCard=evt.currentTarget;
  clickedMiniCard.classList.add('active');
  const {bgImage}=clickedMiniCard.dataset;
  card.style.backgroundImage=`url(${bgImage})`;
}


changeMessageBtn.addEventListener('click',changeMessage);
changeMessage();
function changeMessage() {
const randomMessage=christmasMessages[Math.floor(Math.random() * christmasMessages.length)];
  cardContent.textContent=randomMessage;
}
changeFontBtn.addEventListener('click',changeFont);
function changeFont() {
const randomFont=googleFonts[Math.floor(Math.random() * googleFonts.length)];
  cardContent.style.fontFamily=randomFont;
}
