const numOfGuestInput=document.querySelector('#num_of_guest_input');
const guestForm=document.querySelector('.form');
const suggestedDinnerElem=document.querySelector('.suggested-dinner');

const dinnerSection=document.querySelector('.dinner-section');
let numOfGuest=0;


guestForm.addEventListener('submit',guestFormHandler);

function guestFormHandler(evt) {
  evt.preventDefault();
  if(numOfGuestInput.value ==='') return;
renderDinner();
  numOfGuestInput.value='';
}

function renderDinner(){
const dietaryChoice=document.querySelector('.radio:checked').value;
numOfGuest=Number(numOfGuestInput.value);
const filteredDinner=christmasDinners().filter((christmasDinner)=>{
  return christmasDinner.guestType === dietaryChoice;
});
const randomDinner=filteredDinner[Math.floor(Math.random() * filteredDinner.length)];

dinnerSection.innerHTML='<h3 class="loader"><span class="spinner"></span>loading suggestion...</h3>';
suggestedDinnerElem.textContent='...'
setTimeout(()=>{
suggestedDinnerElem.textContent=randomDinner.dinnerName;
  dinnerSection.innerHTML='';
  dinnerSection.insertAdjacentHTML('beforeend',` <div class="dinner-image-wrapper">
        <img src="${randomDinner.image}" alt="${randomDinner.dinnerName}" class="dinner-image" />
      </div>
      <p class="dinner-info">
      ${randomDinner.info}
     </p>`);
},2000);
     
}

function christmasDinners(){
  return ([{
        dinnerName: 'turkey',
        image: './images/turkey.jpg',
    
        info: `To feed ${numOfGuest} people, you will need ${Math.floor((numOfGuest / 8)) > 1 ? Math.floor(numOfGuest / 8) : 'a'} ${Math.floor(numOfGuest  / 8) > 1 ? 'turkeys' :'turkey'} weighing a minimum of 3.5kg to satisfy your dinner guests.`,
        guestType: 'meat-lover'
    
    },
      {
        dinnerName: 'Roast beef',
        image: './images/roast-beef.jpg',
    
        info: `Decided not to feed your guests turkey this year? If the joint is off the bone, allow 250g per serving – so ${(numOfGuest * 250)/1000}kg for ${numOfGuest} ${numOfGuest > 1 ? 'people' : 'person'}.`,
        guestType: 'meat-lover'
    
    },
      {
        dinnerName: 'Christmas pudding',
        image: './images/pudding.jpg',
    
        info: `When it comes to Christmas pudding, we reckon ${Math.floor(numOfGuest * 112.5)}g pudding will be plenty to feed ${numOfGuest} guests.`,
        guestType: 'meat-lover'
    },
      {
        dinnerName: 'spiced baklava',
        image: './images/baklava.jpg',
      
        info: ` A festive savoury spin on the classic Middle Eastern dessert makes a fantastic vegetarian substitute for turkey this Christmas, ${numOfGuest * 57}g should be enough for ${numOfGuest} guest.`,
        guestType: 'vegetarian'
    },
      {
        dinnerName: 'cauliflower wellington',
        image: './images/cauliflower.webp',
        info: `Cauliflower wellington
This impressive veggie wellington swaps beef for saffron-spiced cauliflower, and it wouldn’t look out of place at any festive feast. you will need ${numOfGuest * 90}g for ${numOfGuest} guests.`,
        guestType: 'vegetarian'
    }
    ])
}