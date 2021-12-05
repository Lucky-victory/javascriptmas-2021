const card=document.querySelector('.card');
const cardContent=document.querySelector('.card-content');
const changeMessageBtn=document.querySelector('.change-message-btn');
const downloadCardBtn=document.querySelector('.download-card-btn');
const receiverNameInput=document.querySelector('#receiver-name');
const cardReceiverName=document.querySelector('.card-receiver-name');
const senderNameInput=document.querySelector('#sender-name');
const cardSenderName=document.querySelector('.card-sender-name');
const miniCards=document.querySelectorAll('.mini-card');
const h2c=html2canvas;
const christmasMessages=['hello','wjatps','sjdkdpdpd']
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
function changeMessage() {
const randomMessage=christmasMessages[Math.floor(Math.random() * christmasMessages.length)];
  cardContent.textContent=randomMessage;
}