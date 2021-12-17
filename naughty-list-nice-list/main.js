const niceListContainer = document.getElementById("nice_list")
const naughtyListContainer = document.getElementById("naughty_list")
const btn = document.getElementById("btn");
const newPeepForm=document.querySelector('.form');
const peepInput=document.querySelector('.peep-input');
const hasBeenGoodCheckbox=document.querySelector('.has-been-good-checkbox');
newPeepForm.addEventListener('submit',addNewPeepToSortees);
btn.addEventListener("click", ()=>{
  renderListsToView()
});

const sorteesArr = [
  {id:1,
    name: "David",
    hasBeenGood: false
    },
  {id:2,
    name: "Del",
    hasBeenGood: true
    },
  {id:3,
    name: "Valerie",
    hasBeenGood: false
    },
  {id:4,
    name: "Astrid",
    hasBeenGood: true
    }
]

function filterNice(){
  
  const nicePeeps=sorteesArr.filter((sortee)=>{
    return (sortee.hasBeenGood == true);
  });
  return nicePeeps;
}
function filterNaughty(){
  
  const naughtyPeeps=sorteesArr.filter((sortee)=>{
    return (sortee.hasBeenGood == false);
  });
  return naughtyPeeps;
}

function renderListsToView(){
  const nicePeeps=filterNice();
  const naughtyPeeps=filterNaughty();
  niceListContainer.innerHTML='';
  naughtyListContainer.innerHTML='';
  let nicePeepsHtml='';
  let naughtyPeepsHtml='';
  if(nicePeeps.length){
    
  nicePeeps.map((nicePeep)=>{
    return (nicePeepsHtml+=`
    <li class='nice-list-item' data-id='${nicePeep.id}'>${nicePeep.name}</li>
    `)
  });
  niceListContainer.insertAdjacentHTML('beforeend',nicePeepsHtml);
  
  const niceListItems=document.querySelectorAll('.nice-list-item');
 niceListItems.forEach((niceListItem, index) => {
   niceListItem.style.animationDelay = `${index * 0.25}s`;
   niceListItem.addEventListener('click', niceToNaughty);
 });
  }
  if(naughtyPeeps.length){
  naughtyPeeps.map((naughtyPeep)=>{
    return (naughtyPeepsHtml+=`
    <li class='naughty-list-item' data-id='${naughtyPeep.id}'>${naughtyPeep.name}</li>
    `)
  });
  naughtyListContainer.insertAdjacentHTML('beforeend',naughtyPeepsHtml);
  const naughtyListItems = document.querySelectorAll('.naughty-list-item');
  naughtyListItems.forEach((naughtyListItem, index) => {
    naughtyListItem.style.animationDelay = `${index * 0.15}s`;
    naughtyListItem.addEventListener('click', naughtyToNice)
  });
  }
   
}
renderListsToView();
function niceToNaughty(evt){
  const target=evt.currentTarget;
  const {id}=target.dataset;
  const findPeep=sorteesArr.find((sortee)=>{
    return (sortee.id == id);
  });
  if(findPeep){
    findPeep.hasBeenGood=!findPeep.hasBeenGood;
    renderListsToView()
  }
  
}
function naughtyToNice(evt){
    const target = evt.currentTarget;
    const { id } = target.dataset;
    const findPeep = sorteesArr.find((sortee) => {
      return (sortee.id == id);
    });
    if (findPeep) {
      findPeep.hasBeenGood = !findPeep.hasBeenGood;
      renderListsToView()
    }
}
function addNewPeepToSortees(evt){
  evt.preventDefault();
  if(peepInput.value ==='') return;
  const newPeep=peepInput.value;
  const hasBeenGood= hasBeenGoodCheckbox.checked ? true : false;
  const id=sorteesArr.length +1;
  sorteesArr.push({name:newPeep,hasBeenGood,id});
  renderListsToView();
  peepInput.value='';
}
// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.

