import { closeModal, modal, renderPod } from "./dom.js";

export function modalOpen () {
    renderPod.addEventListener("click", () => {
        modal.classList.add("display-modal")
        console.log("clicked")
})
}

export function modalClose () {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("display-modal")
        console.log("clicked")
})
}
