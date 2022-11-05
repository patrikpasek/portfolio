/////////////
// Menu

// Zobrazení menu
$(".icon-hamburger").click(() => {
    $("nav").slideToggle(500)

    if ($(".icon-hamburger").attr("src") === "images/hamburger.png"){
        $($(".icon-hamburger").attr("src", "images/close.png"))
    } else {
        $($(".icon-hamburger").attr("src", "images/hamburger.png"))
    }
})

// Ukončení menu
$(".scroll-menu").click(() => {
    $("nav").fadeOut(300)
    $($(".icon-hamburger").attr("src", "images/hamburger.png"))
})