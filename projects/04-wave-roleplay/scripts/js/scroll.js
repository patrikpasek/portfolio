//////////////
// Scroll

// Home
const home = document.querySelector(".home")
let scroll_home = document.querySelector(".scroll-home").offsetTop

// Discord
const discord = document.querySelector(".discord")
let scroll_discord = document.querySelector(".scroll-discord").offsetTop

// About Us
const aboutUs = document.querySelector(".aboutUs")
let scroll_aboutUs = document.querySelector(".scroll-aboutUs").offsetTop

// Team
const team = document.querySelector(".team")
let scroll_team = document.querySelector(".scroll-team").offsetTop

// Rules
const rules = document.querySelector(".rules")
let scroll_rules = document.querySelector(".scroll-rules").offsetTop

// Contact
const contact = document.querySelector(".contact")
let scroll_contact = document.querySelector(".scroll-contact").offsetTop

// Arrow
const arrow = document.querySelector(".arrow")

let scroll = (section, scroll) => {
    section.addEventListener("click", () => {
        window.scrollTo({
            top: scroll,
            behavior: "smooth"
        })
    })
}

scroll(home, scroll_home)
scroll(discord, scroll_discord)
scroll(aboutUs, scroll_aboutUs)
scroll(team, scroll_team)
scroll(rules, scroll_rules)
scroll(contact, scroll_contact)
scroll(arrow, scroll_discord)