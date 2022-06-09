
const form = document.querySelector('#form');
const content = document.querySelector('.content');

form.addEventListener('submit', async (e) => {    
    e.preventDefault();
    content.innerHTML = '';
    const name = document.querySelector('#search').value;
    document.querySelector('#search').value = '';
    const res = await fetch(`https://www.omdbapi.com/?s=${name}&type=movie&apikey=674e38b7`);
    const data = await res.json();
    const movies = data.Search;
    for(let movie of movies){
        const response = await fetch(`https://www.omdbapi.com?i=${movie.imdbID}&apikey=674e38b7`);
        const data = await response.json();
        const movieDiv = `<div class="movie-card">
        <div class="movie-image">
          <img
            src="${data.Poster}"
            alt="">
        </div>
        <div class="movie-info">
          <div class="movie-name">
            <h4>${data.Title}</h4>
            <i class="fi fi-rr-star"></i>
            <span>${data.imdbRating}</span>
          </div>
          <div class="movie-type">
            <p>${data.Runtime}</p>
            <p>${data.Genre}</p>
            <a href="#"> watchlist </a>
          </div>
          <div class="movie-description">
            <p>${data.Plot}</p>
          </div>
        </div>
      </div>
      <hr></hr>`;
        content.innerHTML += movieDiv;
    }
    console.log(data.Search[0].imdbID);
});