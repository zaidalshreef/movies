import { renderMovies,loadStorge} from "./renderhtmlFn.js";


const form = document.querySelector("#form");
const content = document.querySelector(".content");
loadStorge();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  content.innerHTML = "";
  const name = document.querySelector("#search").value;
  document.querySelector("#search").value = "";
  const res = await fetch(
    `https://www.omdbapi.com/?s=${name}&type=movie&apikey=674e38b7`
  );
  const data = await res.json();
  const movies = data.Search;
  await renderMovies(movies,content)
}
);
  