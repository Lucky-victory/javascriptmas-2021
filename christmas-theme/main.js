const mainContainer = document.querySelector('.main-container');
const toggleSwitches = document.querySelectorAll('.toggle-switch');
const quoteContentElem=document.querySelector('.quote-content');
const quoteAuthorElem=document.querySelector('.quote-author');
const QUOTES=[
  {
  content:"Snowflakes are one of nature's most fragile things, but just look what they can do when they stick together.",
  author:'vista M. kelly',
  category:'snow'
},
  {
  content:'Let us keep Christmas beautiful without a thought of greed.',
  author:'Ann garnett schultz',
  category:'christmas'
},
  {
  content:"Unless we make Christmas an occasion to share our blessings, all the snow in Alaska won't make it 'white.",
  author:'bing crosby',
  category:'christmas'
},
  {
  content:'when snow falls, nature listens.',
  author:'antoinette van kleeff',
  category:'snow'
},
  {
  content:"One of the most glorious messes in the world is the mess created in the living room on Christmas Day. Don't clean it up too quickly.",
  author:'andy rooney',
  category:'christmas'
},
  {
  content:'Snow falling soundlessly in the middle of the night will always fill my heart with sweet clarity.',
  author:'Novala takemoto',
  category:'snow'
},
{
 content:'Summer friends will melt away like summer snows, but winter friends are friends forever.',
 author:'George r.r. Martin',
 category:'snow'
},
  {
  content:'What is Christmas? It is tenderness for the past, courage for the present, hope for the future.',
  author:'Agnesm. pahro',
  category:'christmas'
},
];

window.onload=function(){
  setTheme();
}
toggleSwitches.forEach((toggleSwitch) => {
  toggleSwitch.addEventListener('click', () => {
setTheme()
  })
});
function setTheme(){
      const checkedToggleSwitch = document.querySelector('.toggle-switch:checked');
      const chosenTheme = checkedToggleSwitch.dataset.theme;
      if (chosenTheme === 'snow') {
        mainContainer.classList.replace('christmas', 'snow');
        generateRandomQuote('snow');
      }
      else {
        mainContainer.classList.replace('snow', 'christmas');
        generateRandomQuote('christmas')
      }
}

function generateRandomQuote(cat='christmas'){
  const filteredQuotes=QUOTES.filter((quote)=>{
    return quote.category==cat;
  });
  const randomIndex=Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote=filteredQuotes[randomIndex];
  renderQuoteToView(randomQuote)
}

function renderQuoteToView(quote){
  quoteContentElem.textContent=quote.content
  quoteAuthorElem.textContent=quote.author
}