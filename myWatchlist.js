import { renderMovies, loadStorge,movieArray} from "./renderhtmlFn.js";


const content = document.querySelector(".content");

loadStorge();

renderMovies(movieArray,content);