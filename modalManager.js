import { closeModal, modal} from "./dom.js";

export function modalOpen () {
    const openModal = document.querySelectorAll(".podcast-container")

    openModal.forEach(m => {
        m.addEventListener("click", () => {
            modal.classList.add("display-modal")
        })
    })
}

export function modalClose () {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("display-modal")
        console.log("clicked")
})
}
