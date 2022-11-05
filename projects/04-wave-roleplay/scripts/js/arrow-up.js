let arrowUp = document.querySelector(".arrowUp")

window.addEventListener("scroll", () => {
    let scrolled = window.scrollY
    console.log(scrolled)

    if (Math.ceil(scrolled) > 1000){
        arrowUp.style.display = "block"
    }
})