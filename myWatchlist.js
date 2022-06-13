import { renderMovies, loadStorge,movieArray} from "./RenderHtml.js";


const content = document.querySelector(".content");

loadStorge();

renderMovies(movieArray,content);