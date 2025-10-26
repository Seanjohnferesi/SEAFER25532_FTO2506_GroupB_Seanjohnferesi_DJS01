import { podcasts } from "./scripts/data.js";
import { modalOpen, modalClose } from "./scripts/modalManager.js";
import {  renderPodcast } from "./scripts/render.js";

renderPodcast()
modalOpen(podcasts);
modalClose();
