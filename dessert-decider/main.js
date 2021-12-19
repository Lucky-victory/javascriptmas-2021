const historyContainer=document.querySelector('.history-list');
const btn=document.querySelector('.btn');
const searchItems=document.querySelectorAll('.search-item');
const imagePreview=document.querySelector('.image-preview');
const baseUrl = 'https://foodish-api.herokuapp.com/api/images';
let searchValue = 'dessert';
const storage={
  getHistory(){
  return (JSON.parse(localStorage.getItem('foodish-history') || '[]'));
},
  setHistory(newData){
    const initialData=this.getHistory();
    const limit=10;
    initialData.unshift(newData);
    
if (initialData.length >= limit) {
  initialData.splice(initialData.length - 1, initialData.length - limit);

}
    localStorage.setItem('foodish-history',JSON.stringify(initialData));
}
}
searchItems.forEach((searchItem)=>{
  searchItem.addEventListener('click',getSearchValue)
});

btn.addEventListener('click',()=>{
searchDessert()
} );

function searchDessert(){
  fetch(`${baseUrl}/${searchValue}`).then((res)=>res.json()).then((data)=>{
    imagePreview.src=data.image;
    imagePreview.alt=searchValue;
    storage.setHistory(data);
    renderHistory();
  }).catch((err)=>{
    console.log(err);
  })
}
searchDessert();
function getSearchValue(evt) {
const target=evt.currentTarget
const {value}=target.dataset;
searchValue=value;
searchDessert();
const activeItem=document.querySelector('.search-item.active');
if(activeItem){
  activeItem.classList.remove('active');
}
target.classList.add('active');
}


function renderHistory(){
  const history=storage.getHistory();
  let html='';
  historyContainer.innerHTML='';
  if(history.length){
    history.map((item)=>{
      return(html+=`
      <img src="${item.image}" alt="" class="history-image">
      `)
    });
    historyContainer.insertAdjacentHTML('beforeend',html);
    const historyImages=document.querySelectorAll('.history-image');
    historyImages.forEach((historyImage)=>{
      historyImage.addEventListener('click',setImageSrc)
    });
  }
  else{
    historyContainer.insertAdjacentHTML('beforeend','<div class="no-history"> No history yet.</div>')
  }
}
renderHistory()
function setImageSrc(evt) {
const imageSrc=evt.currentTarget.src;
imagePreview.src=imageSrc;
}