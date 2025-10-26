import { podcasts, genres } from "./data.js";
import {  podGrid } from "./dom.js";

export function renderPodcast() {
    podcasts.forEach(podcast => {
        // podcast container 
        let card = document.createElement("div")
        card.classList.add("podcast-container")

        // podacast img container
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("podcast-img-div")

        // podcast image
        let img = document.createElement("img")
        img.classList.add("podcast-img")
        img.src = podcast.image;
        card.appendChild(img)

        //podcast title
        let podTitle = document.createElement("h2")
        podTitle.classList.add("pod-title")
        podTitle.textContent = podcast.title;
        card.appendChild(podTitle);

        //podcast seasons
        let seasonWrapper = document.createElement("div")
        seasonWrapper.classList.add("season-wrapper");
        card.appendChild(seasonWrapper);

        let seasonIcon = document.createElement("img")
        seasonIcon.src = "/images/season.png";
        seasonWrapper.appendChild(seasonIcon);

        let seasons = document.createElement("span")
        seasons.textContent = `${podcast.seasons} seasons`;
        seasonWrapper.appendChild(seasons);

        // podcast genres
        const showGenres = genres.filter(genre => genre.shows.includes(podcast.id))

        let genreWrapper = document.createElement("div");
        genreWrapper.classList.add("genre-wrapper");

        showGenres.forEach(genre => {
            let gen = document.createElement("div");
            gen.classList.add("genre-item");
            gen.textContent = genre.title;
            genreWrapper.appendChild(gen)
            // console.log(title)
        })
        card.appendChild(genreWrapper);

        // podacast last update
        const formattedDate = new Date(podcast.updated).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        let updateTime = document.createElement("p");
        updateTime.classList.add("update-time")
        updateTime.textContent = `Updated ${formattedDate}`;
        card.appendChild(updateTime);

        podGrid.appendChild(card)
        
    })
}

