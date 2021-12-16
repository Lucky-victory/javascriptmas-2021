const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")

const btn = document.getElementById("btn")
const movieCard = document.querySelector('.card');
const movieTitle = document.querySelector('.movie-title');
const movieDirector = document.querySelector('.movie-title');

const moviesArr = [
  {
    name: "Die Hard",
    age: "18+",
    genre: "Action",
    starring:'bruce willis',
    cover:'./images/die-hard.jpg',
    className:'die-hard',
          director:'john Mctiernan'

    },
  {
    name: "Love Actually",
    age: "18+",
    genre: "Romance",
    cover:'./images/love-actually.jpg',
    starring:'olivia olson',
    className:'love-actually',
          director:'richard curtis'

    },
  {
    name: "The Polar Express",
    age: "PG",
    genre: "Action",
    starring:null,
    className:'polar-express',
    cover:'./images/polar-express.jpg',
          director:'robert zemeckis'

    },
  {
    name: "Shrek",
    age: "PG",
    genre: "Romance",
    starring:null,
    className:'shrek',
    cover:'./images/shrek.jpg',
          director:'vicky jenson'

    },{
      name:'flash',
      age:'18+',
      genre:'Action',
      starring:null,
      className:'flash',
      cover:'./images/flash.jpg',
            director:'David Nutter'

    },
    {
      name:'la la land',
      age:'PG',
      genre:'Romance',
      starring:null,
      className:'la-la-land',
      cover:'./images/la-la-land.jpg',
            director:'damien chazelle'

    },
    {
      name:'a walk to remember',
      age:'18+',
      genre:'Romance',
      starring:null,
      className:'walk-to-remember',
      cover:'./images/a-walk-to-remember.jpg',
            director:'adam shankman'

    },
    {
      name:'a star is born',
      age:'PG',
      genre:'Romance',
      starring:null,
      className:'star-is-born',
      cover:'./images/star-is-born.jpg',
      director:'bradly cooper'
    }
]
function loadGenres(){
  
  genreSelector.innerHTML='';
  let html='';
  const genresArr=[];
  moviesArr.map((movie)=>{
    genresArr.push(movie.genre)
  });
  const noDuplicateGenre=removeDuplicates(genresArr);
  noDuplicateGenre.map((genre)=>{
    return (
      html += `<option value='${genre}'>${genre}</option>`
    );
  });
  genreSelector.insertAdjacentHTML('beforeend',html);
}
loadGenres();

function loadAge() {
  ageSelector.innerHTML='';
  let html='';
  const agesArr = [];
  moviesArr.map((movie) => {
    agesArr.push(movie.age)
  });
  const noDuplicateAge = removeDuplicates(agesArr);
  noDuplicateAge.map((age) => {
    return (
      html += `<option value='${age}'>${age}</option>`
    );
  });
  ageSelector.insertAdjacentHTML('beforeend',html)
}
loadAge()
function selectMovie(){
  const selectedAge=ageSelector.value;
  const selectedGenre=genreSelector.value;
  const filteredMovie=moviesArr.filter((movie)=>{
    return (movie.age == selectedAge && movie.genre == selectedGenre);
    
  });
  renderMovieCard(filteredMovie);
}
function renderMovieCard(movies){
  const randomMovie=movies[Math.floor(Math.random() * movies.length)];
  movieCard.innerHTML=`
    <div class="card-image-container">
          <img src="${randomMovie.cover}" alt="" class="card-image">
        </div> 
        <div class = "card-content" >
          <h2 class="movie-title">${randomMovie.name}</h2> 
          ${randomMovie.starring ? '        <span class="movie-actor">'+randomMovie.starring+'</span>': ''}
      <div class="movie-details">
        <span class="movie-genre">genre:  ${randomMovie.genre}</span> ${ randomMovie.director ? '<span class = "movie-director" > Directed by: ' +randomMovie.director+'</span> ' : ''}
          <span class="movie-age"> ${randomMovie.age}</span> </div> 
          </div>
  `;
  movieCard.className=`card ${randomMovie.className}`;
}
selectMovie();
btn.addEventListener('click',()=>{
  selectMovie();
});
ageSelector.addEventListener('change',()=>{
  selectMovie();
});
genreSelector.addEventListener('change',()=>{
  selectMovie();
});


function removeDuplicates(arr){
  const noDups=arr.reduce((accum,val,index)=>{
    if(val == val && !accum.includes(val)){
      accum.push(val)
    }
    return accum;
  },[]);
    
  
  return noDups;
}

// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals: 
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc. 