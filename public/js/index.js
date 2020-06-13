const buttonSearch  = document.querySelector("#page-home main a")
const modal         = document.querySelector("#modal")
const close         = document.querySelector("#modal .header a")
const trash         = document.querySelector("#modal .header .modal-bg2")



buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")

    setTimeout(() => {
        trash.style.opacity = "1"
        trash.style.transform = "translateX(0px)"
        trash.style.transition = "1s"

    } , 200)


})
close.addEventListener("click", () => {
    modal.classList.add("hide")

    setTimeout(() => {
        trash.style.opacity = "0"
        trash.style.transform = "translateX(500px)"
        trash.style.transition = "1s"

    } , 0)
    
})


 








