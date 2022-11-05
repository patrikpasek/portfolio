const projects = document.querySelector(".projects")
const contact = document.querySelector(".contact")
const more = document.querySelector(".more")

projects.addEventListener("click", () => {
    let scroll_projects =  document.querySelector(".scroll-projects").offsetTop

    window.scrollTo({
        top: scroll_projects,
        behavior: "smooth"
    })
})

contact.addEventListener("click", () => {
    let scroll_contact = document.querySelector(".scroll-contact").offsetTop

    window.scrollTo({
        top: scroll_contact,
        behavior: "smooth"
    })
})

more.addEventListener("click", () => {
    let scroll_projects =  document.querySelector(".scroll-projects").offsetTop

    window.scrollTo({
        top: scroll_projects,
        behavior: "smooth"
    })
})