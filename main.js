import { modalOpen, modalClose } from "./modalManager.js";
import { renderPodcast } from "./render.js";
// import { genres, podcast } from "./data.js";

renderPodcast()

modalOpen();
modalClose();

// const showGenres = genres
//     .filter(genre => genre.shows.includes(podcast.id))
//     .map(genre => genre.title)

// console.log(showGenres)