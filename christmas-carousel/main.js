const carousel=document.querySelector('.carousel');
const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
let carouselSlides;
const imgs=[{
  src:'./images/christmas2.jpg',
  alt:'red ball christmas tree',
  wish:"it's a season of giving,reach out to someone."
},{
  src:'./images/christmas1.jpg',
  alt:'golden christmas tree',
  wish:'spread love this season.'
  
},{
  src:'./images/christmas4.jpg',
  alt:'santa in a glass ball',
  wish:'wishing you a merry christmas '
},{
  src:'./images/christmas3.jpg',
  alt:'christmas tree on a red car ',
  wish:'may this christmas bring you happiness.'
}
]
let currentIndex=0;

function renderCarouselHtml(){
  carousel.innerHTML='';
  let html='';
  imgs.map((img)=>{
    return (html+=`
            <div class="carousel-slide">
              <div class="carousel-slide-inner top">
                <img src="${img.src}" alt="${img.alt}">
              </div>
              <div class="carousel-slide-inner bottom">
                <img src="${img.src}" alt="">
              </div>
              <div class='carousel-text'>${img.wish}</div>
            </div>
    `);
  });
  carousel.insertAdjacentHTML('beforeend',html);
  carouselSlides=document.querySelectorAll('.carousel-slide');
}
renderCarouselHtml();
const carouselSlidesLength=carouselSlides.length;

function setActiveSlide(){
  const offsetWidth=carouselSlides[currentIndex].offsetWidth;
  carouselSlides[currentIndex].classList.add('active');
  carousel.style.transform=`translateX(-${((offsetWidth * currentIndex) + (currentIndex * 16))}px)`
}
setActiveSlide();
function nextSlide(){
  ++currentIndex;
  if(currentIndex > carouselSlidesLength-1){
    currentIndex=0;
  }
const offsetWidth=carouselSlides[currentIndex].offsetWidth;
  const currentSlide=document.querySelector('.carousel-slide.active');
  if(currentSlide != undefined){
    currentSlide.classList.remove('active');
  }
  carouselSlides[currentIndex].classList.add('active');
  carousel.style.transform=`translateX(-${((offsetWidth * currentIndex) + (currentIndex * 16))}px)`
}
function prevSlide(){
  --currentIndex;
  if(currentIndex < 0){
    currentIndex=carouselSlidesLength - 1;
  }
  const offsetWidth = carouselSlides[currentIndex].offsetWidth;
  const currentSlide = document.querySelector('.carousel-slide.active');
  if (currentSlide != undefined) {
    currentSlide.classList.remove('active');
  }
    carouselSlides[currentIndex].classList.add('active');

  carousel.style.transform=`translateX(-${((offsetWidth * currentIndex) + (currentIndex * 16))}px)`
}


prevBtn.addEventListener('click',()=>{
  prevSlide();
});
nextBtn.addEventListener('click',()=>{
  nextSlide();
});