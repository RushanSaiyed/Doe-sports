$(document).ready(function ($) {
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        nav: false,
        items: 4,
        responsive: {
            0: {
              items: 1
            },
        
            600: {
              items: 3
            },
        
            1024: {
              items: 4
            },
        
            1366: {
              items: 4
            }
          }
    });

    var owl = $(".owl-carousel");
    owl.owlCarousel();
    $(".next-btn").click(function () {
        owl.trigger("next.owl.carousel");
    });
    $(".prev-btn").click(function () {
        owl.trigger("prev.owl.carousel");
    });
    $(".prev-btn").addClass("disabled");
    $(owl).on("translated.owl.carousel", function (event) {
        if ($(".owl-prev").hasClass("disabled")) {
            $(".prev-btn").addClass("disabled");
        } else {
            $(".prev-btn").removeClass("disabled");
        }
        if ($(".owl-next").hasClass("disabled")) {
            $(".next-btn").addClass("disabled");
        } else {
            $(".next-btn").removeClass("disabled");
        }
    });
});
