let movieArray = [];

function createMovie(data,i){
    return `<div class="movie-card">
            <div class="movie-image">
              <img
                src="${data.Poster}"
                alt="">
            </div>
            <div class="movie-info">
              <div class="movie-name">
                <h4>${data.Title}</h4>
                <div>
                <i class="fi fi-rr-star"></i>
                <span>${data.imdbRating}</span>
                </div>
              </div>
              <div class="movie-type">
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <div class="movie-WatchList-${i} movie-WatchList" style = "visibility:${fund(data) ? "hidden" : ""};">
                <button id="btn-${i}" class="btn btn-primary"  > <i class="fi fi-ss-add"></i></button><p>WatchList</p>
                </div>
                </div>
              <div class="movie-description">
                <p>${data.Plot}</p>
              </div>
            </div>
          </div>
          <hr></hr>`;
    }
    
    async function renderMovies(movies,content){
    for (let i = 0; i < movies.length; i++) {
        const response = await fetch(
          `https://www.omdbapi.com?i=${movies[i].imdbID}&apikey=674e38b7`
        );
        const data = await response.json();
        
        content.innerHTML += createMovie(data,i);
       
      }
    
    }
    
    
    function addWatchlist(movies){
    for (let i = 0; i < movies.length; i++) {
        document.getElementById(`btn-${i}`).addEventListener("click",  (e) => {
        e.preventDefault();
        document.querySelector(`.movie-WatchList-${i}`).style.visibility = "hidden";
         const found =  fund(movies[i],movieArray);
          if (!found) {
            movieArray.push(movies[i])
          }
        
        window.localStorage.setItem('movies',JSON.stringify(movieArray));
       })
      }
    }
    
    
    function fund(movies){
     return movieArray.find((movie) => {
           return movie.Title == movies.Title
          })
    }
    
    function loadStorge(){
      const storge = JSON.parse(window.localStorage.getItem('movies'))
      if (storge){
        movieArray = [...storge];
      }
    }


    export   {renderMovies,addWatchlist,loadStorge,movieArray} ;