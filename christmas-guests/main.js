const guestContainer = document.querySelector('.guests-list');
const addGuestForm = document.querySelector('.form');
const addGuestBtn = document.querySelector('.add-btn');
const deleteGuestBtn = document.querySelector('.delete-btn');
const guestInput = document.querySelector('.guest-input');


const guests = ['Nice Relative', 'evil relative', 'fun relative', 'Nancy', 'Janeth'];
let guestsToDelete=[];
deleteGuestBtn.addEventListener('click',deleteGuest);
addGuestForm.addEventListener('submit',addGuest);
function addGuest(evt) {
  evt.preventDefault();
if(guestInput.value ==='') return;

  guests.push(guestInput.value);
  addGuestBtn.textContent = "adding";
  addGuestBtn.classList.add('adding');

  setTimeout(() => {
    renderView();
    addGuestBtn.textContent = "add'em";
    addGuestBtn.classList.remove('adding')
  }, 1500);
  
  addGuestForm.reset();
}

function renderView(){
  guestContainer.innerHTML='';
  let html=''
  if(!guests.length){
   html+=`<h2 style='color:#777'>oh! sorry, You don't have any guest.</h2>`;
     guestContainer.insertAdjacentHTML('beforeend',html)

  return;
  }
  guests.map((guest,index)=>{
    return(
      html+=`
     <li class="guest" data-guest-id='${index}'>${guest}</li>
      
      `
      )
  });
  guestContainer.insertAdjacentHTML('beforeend',html);
  const guestItems=document.querySelectorAll('.guest');
  guestItems.forEach((guestItem)=>{
    
  guestItem.addEventListener('click',selectGuestToDelete);
  })
}
renderView();

function selectGuestToDelete(evt){
const selectedItem=evt.currentTarget;
selectedItem.classList.toggle('to-be-deleted');
let guestId=selectedItem.dataset.guestId;
if(selectedItem.classList.contains('to-be-deleted')){
 guestsToDelete.push(Number(guestId));
 }
else{
  const alreadyExist=guestsToDelete.findIndex((val)=>{
  return Number(val == guestId);
 });
 if(alreadyExist != undefined){
   guestsToDelete.splice(alreadyExist,1);
 }

}
  deleteGuestBtn.innerHTML= guestsToDelete.length ? `delete (<span>${guestsToDelete.length})</span>` : `delete`

}

function deleteGuest(){
  if(guestsToDelete.length){
    for(let i=0; i< guestsToDelete.length;i++){
      guests.splice(guestsToDelete[i],1)
    }
  renderView();
  guestsToDelete=[];
  deleteGuestBtn.innerHTML= guestsToDelete.length ? `delete (<span>${guestsToDelete.length})</span>` : `delete`
    return;
  }
  guests.splice(guests.length-1,1);
  deleteGuestBtn.innerHTML=`delete`
  
  renderView();
}