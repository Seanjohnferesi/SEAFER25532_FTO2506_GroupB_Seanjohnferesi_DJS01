import { podcasts } from "./data.js";
import { renderPod, podGrid } from "./dom.js";

export function renderPodcast() {
    //podcast grid
    podGrid.classList.add("podcast-grid");
    
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
        let genreWrapper = document.createElement("div")
        genreWrapper.classList.add("genre-wrapper")

        podcast.genres.forEach(genre => {
            let gen = document.createElement("div");
            gen.classList.add("genre-item");
            gen.textContent = genre;
            genreWrapper.appendChild(gen)
        })
        card.appendChild(genreWrapper);

        // podacast last update
        let updateTime = document.createElement("p");
        updateTime.classList.add("update-time")
        updateTime.textContent = `Updated ${podcast.updated}`;
        card.appendChild(updateTime);

        podGrid.appendChild(card)
        
    })

    renderPod.appendChild(podGrid);
}

