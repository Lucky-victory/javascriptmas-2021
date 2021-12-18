const checkboxesContainer=document.querySelector('.checkboxes-container');
const itemsArr=[{
  name:'wine',
  emoji:'🍾',
  checked:true,
},
{
  name:'shoe',
  emoji:'👞',
  checked:false
},
{
  name:'strawberry',
 emoji:' 🍓',
 checked:true,
},
{
  name:'banana',
  emoji:'🍌',
  checked:false,
},
{
  name:'apples',
  emoji:'🍎',
  checked:true,
}];

function renderCheckboxes() {
  checkboxesContainer.innerHTML='';
  let html='';
  itemsArr.map((item,index)=>{
    return(html+=`
      <div class="checkbox-wrapper">
            <input type="checkbox" id="c-box-${index+1}" class="checkbox" data-emoji="${item.emoji}" ${item.checked ? 'checked' : ''}>
            <label for="c-box-${index+1}" >
            ${item.name}
            </label>
          </div>
    `)
  });
  checkboxesContainer.insertAdjacentHTML('beforeend',html);
}
renderCheckboxes()