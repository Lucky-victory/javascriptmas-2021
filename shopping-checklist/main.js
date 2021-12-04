const popupModal=document.querySelector('.popup');
const popupCancelBtn=document.querySelector('.popup-cancel-btn');
const popupConfirmBtn=document.querySelector('.popup-confirm-btn');
const checklistContainer = document.getElementById("checklist");
const addChecklistForm=document.querySelector('.add-checklist-form');
const addChecklistInput=document.querySelector('.add-checklist-input');
let itemToDelete;
const storage={
  getItems(){
   return (JSON.parse( localStorage.getItem('shopping-checklist') || '[]'));
  },
  setItem(newItem){
    const allItems=this.getItems();
    allItems.unshift(newItem);
    localStorage.setItem('shopping-checklist',JSON.stringify(allItems));
    
  },
  deleteItem(itemIndex){
    const allItems=this.getItems();
    allItems.splice(itemIndex,1);
    localStorage.setItem('shopping-checklist',JSON.stringify(allItems));
  }
  
}
popupCancelBtn.addEventListener('click',()=>{
  hidePopUpModal();
});
popupConfirmBtn.addEventListener('click',()=>{
  hidePopUpModal();
  confirmDelete(itemToDelete)
});

function hidePopUpModal(){
  if(popupModal.classList.contains('show')){
    
  popupModal.classList.remove('show');
  }
}

function showPopUpModal() {
popupModal.classList.add('show');
}
addChecklistForm.addEventListener('submit',addNew);
function addNew(evt){
  evt.preventDefault();
  const newItem=addChecklistInput.value;
  if(newItem==='') return;
  storage.setItem(newItem);
  addChecklistForm.reset();
  renderView();
  
}
function renderView() {
  const allItems=storage.getItems();
    checklistContainer.innerHTML='';
  if(allItems.length){
  allItems.map((item,index)=>{
    let html='';
  html+=` <div class="checklist-item" data-item-index='${index}'>
  <div class='checkbox-wrapper'>
            <input type="checkbox" name="" id="item-${index+1}" class="checklist-checkbox">
            <label for="item-${index+1}" class='checklist-label'>${item}</label>
            </div>
            <button class="delete-btn" title="delete item"><span></span></button>
          </div>`;
    checklistContainer.insertAdjacentHTML('beforeend',html)
  });
  
  const deleteBtns=document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((deleteBtn)=>{
    deleteBtn.addEventListener('click',triggerDelete)
  });
  }
}
renderView()
function triggerDelete(evt) {
  const parent=evt.currentTarget.parentElement;
  const {itemIndex}=parent.dataset;
  itemToDelete=parseInt(itemIndex);
  showPopUpModal();
}
function confirmDelete(itemToDelete){
  storage.deleteItem(itemToDelete);
  renderView();
}
// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

