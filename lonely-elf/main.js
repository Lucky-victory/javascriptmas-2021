const emojisContainer = document.querySelector('.emojis-container');
const duplicateBtn = document.querySelector('.duplicate-btn');
const bonusWord = document.querySelector('.bonus-word');
const emojiList = document.querySelector('.emoji-list');
const emojisArray = [{ name: 'man', val: '👳' }, { name: 'boy', val: '👱' }, { name: 'girl', val: '🙎' }, { name: 'bride', val: '👰' }, { name: 'police', val: '👮' }];
const soundPlayer=new Audio();
let emojiToDuplicate = {};
let emojiCounter = 0;
let emojiToCompare = [];
const duplicateEmojis = [];

duplicateBtn.addEventListener('click', () => {
  triggerDuplicate()
})

function loadEmojiList() {

  emojiList.innerHTML = '';
  let html = '';
  emojisArray.map((emo) => {
    return (html += `<li class="emoji-item" data-emoji-name='${emo.name}' data-emoji-val='${emo.val}'>${emo.val}</li>
`);
  });
  emojiList.insertAdjacentHTML('beforeend', html);
  const emojiItems = document.querySelectorAll('.emoji-item');
  emojiItems[0].classList.add('active');
  emojiToDuplicate['name'] = emojiItems[0].dataset.emojiName;
  emojiToDuplicate['val'] = emojiItems[0].dataset.emojiVal;
  triggerDuplicate();
  emojiItems.forEach((emojiItem) => {
    emojiItem.addEventListener('click', selectEmojiToDuplicate);
  })
}
loadEmojiList();

function selectEmojiToDuplicate(evt) {
  document.querySelector('.emoji-item.active').classList.remove('active');
  const target = evt.currentTarget;
  target.classList.add('active');
  const { emojiName, emojiVal } = target.dataset;
  emojiToDuplicate['name'] = emojiName;
  emojiToDuplicate['val'] = emojiVal;
}

function triggerDuplicate() {
  duplicateEmojis.push({ ...emojiToDuplicate });
resetCounter();
  renderDuplicatesToView();
  
}

function renderDuplicatesToView() {
  let html = '';
  emojisContainer.innerHTML = '';
  duplicateEmojis.map((emoji) => {
    return (html += `
      <span class="emoji" data-emo-name='${emoji.name}'>${emoji.val}</span>
    
    `)
  });
  emojisContainer.insertAdjacentHTML('beforeend', html);
  const emojis = document.querySelectorAll('.emoji');
  emojis.forEach((emoji) => {
    emoji.addEventListener('click', choseEmoji);
  });
}

function choseEmoji(evt) {

  const target = evt.currentTarget;
  const { emoName, emoVal } = target.dataset;
  if (target.classList.contains('chosen')) {
    return;

  }

  emojiCounter++;
  if (emojiToCompare.length == 2) {

    Object.preventExtensions(emojiToCompare)
  }
  else {

    emojiToCompare.push(emoName);
  }

  if (emojiToCompare.length === 2) {
    if (emojiToCompare[0] === emojiToCompare[1]) {
      const chosenEmojiIndexes = findMultipleIndex(duplicateEmojis, emojiToCompare[0]);
      for (let i = 0; i < emojiToCompare.length; i++) {
        duplicateEmojis.splice(chosenEmojiIndexes[i], 1)
      }
      bonusWord.textContent = 'awesome';
      bonusWord.classList.add('show');
emojisContainer.classList.add('mute');
playSound('./sounds/bonus-sound.mp3');

      setTimeout(() => {
        bonusWord.classList.remove('show')
        renderDuplicatesToView();
        stopSound();
      resetCounter();
      emojisContainer.classList.remove('mute');

      }, 1000)
    }
    else {
      bonusWord.textContent = 'oh! no';
      bonusWord.classList.add('show');
      emojisContainer.classList.add('mute');
playSound('./sounds/lose-sound.wav');
      setTimeout(() => {
        renderDuplicatesToView();
        bonusWord.classList.remove('show');
      resetCounter()
emojisContainer.classList.remove('mute');
stopSound()
      }, 1000);
    }

  }

  target.classList.add('chosen');


}
function resetCounter(){
  emojiCounter=0;
  emojiToCompare=[];
}
function findMultipleIndex(arr, val) {

  const indexes = arr.reduce((accum, arrItem, index) => {
    if (val === arrItem.name) {
      accum.push(index);
    }
    return accum;
  }, [])

  return indexes;
}

function playSound(src){
  soundPlayer.src=src;
  soundPlayer.load();
  soundPlayer.play();
}
function stopSound(){
  soundPlayer.pause();
  soundPlayer.currentTime=0;
}