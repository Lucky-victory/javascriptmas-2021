const numOfGuestInput=document.querySelector('#num_of_guest_input');
const guestForm=document.querySelector('.form');
const dietaryCheckboxes=document.querySelectorAll('.radio');
const suggestedDinnerElem=document.querySelector('.suggested-dinner');

const dinnerSection=document.querySelector('.dinner-section');
let hel=500

const  christmasDinners=[{
  image:'./images/turkey.jpg',
  info:'To feed eight people, you will need a turkey weighing a minimum of 3.5kg to satisfy your dinner guests.'
},
{
  image:'./images/roast-beef.jpg',
  info:"Decided not to feed your guests turkey this year? If the joint is off the bone, allow 250g per serving – so 2kg for eight people."
},
{
  image:'./images/pudding.jpg',
info:`When it comes to Christmas pudding, we reckon ${hel}g pudding will be plenty to feed eight`
}
]
console.log(christmasDinners[2].info);

guestForm.addEventListener('submit',guestFormHandler);

function guestFormHandler(evt) {
  evt.preventDefault();

  guestForm.reset();
}

function renderDinner(){
  
}