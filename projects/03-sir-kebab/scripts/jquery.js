(function($){
    $(function(){
        // Skrolování
        $(".JQ--scroll--aboutUs").click(function(){
            $("html, body").animate({ scrollTop: $(".JQ--aboutUs").offset().top}, 1000)
        })
        $(".JQ--scroll--priceList").click(function(){
            $("html, body").animate({ scrollTop: $(".JQ--priceList").offset().top}, 1000)
        })

        $(".JQ--scroll--photoGallery").click(function(){
            $("html, body").animate({ scrollTop: $(".JQ--photoGallery").offset().top}, 1000)
        })

        $(".JQ--scroll--contact").click(function(){
            $("html, body").animate({ scrollTop: $(".JQ--contact").offset().top}, 1000)
        })

        // Responzivní menu
        $(".JQ--menu").click(function(){
            $(".navigation").slideToggle(700)
        })

        $(".JQ--image--icon").click(function(){
            if ( $(".JQ--image--icon").attr("src") === "images/menu.png" ){
                $( $(".JQ--image--icon").attr("src", "images/close.png"))
            } else {
                $( $(".JQ--image--icon").attr("src", "images/menu.png"))
            }
        })

        // Zkrytí textu
        $(".hide").hide().fadeIn(3000)
    })
})(jQuery)