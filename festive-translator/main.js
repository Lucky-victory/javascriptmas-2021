const languageSelector = document.getElementById("language_selector")
const greetingDisplay = document.getElementById("greeting_text")
const greetingContainer = document.querySelector(".greeting-container");
languageSelector.addEventListener("change", translate)
const indicator=document.querySelector('.indicator');
const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!",
        color:'#430657'
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!",
        color:'#661A08'
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!",
        color:'#085E66'
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!",
        color:'#660853'
    }
]
function loadLanguages(){
  let html='';
  greetingsArr.map((greeting)=>{
    return (html+=`
      <option value="${greeting.language}">${greeting.language}</option>;
    
    `)
  });
  languageSelector.innerHTML=html;
translate();
  
}
loadLanguages();
function translate(){
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
    const filteredGreeting=greetingsArr.filter((greeting)=>{
  return (greeting.language === languageSelector.value);
      
    });
  const selectedGreeting=Object.call({},...filteredGreeting);
    
    indicator.classList.add('animate');
    greetingDisplay.innerHTML='';
    const splittedText = selectedGreeting.greeting.split('');
    
    let textIndex = 0;
    const intervalId = setInterval(() => {
      if (textIndex >= splittedText.length) {
        clearInterval(intervalId);
        indicator.classList.remove('animate');
        return;
      }
    
      greetingDisplay.insertAdjacentHTML('beforeend', `<span class='fade'>${splittedText[textIndex]}</span>`);
      ++textIndex;
    
    }, 300);
  document.documentElement.style.setProperty('--bg',`${selectedGreeting.color}33`);
  document.documentElement.style.setProperty('--textColor',`${selectedGreeting.color}`);
}
// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
