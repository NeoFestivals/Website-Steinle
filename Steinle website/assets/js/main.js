(function ($) {
    "use strict";
    $(document).ready(function () {
        // == AOS Init== //
        AOS.init({
            disable: 'mobile'
        });

        // == Search Bar== //
        if ($('.search-icon').length) {
            $('.search-icon').on('click', function () {
                $('.search-form').toggleClass('show');
            });
        }

        // == Hero Slider== //
        if ($('.hero-slider').length) {
            var swiper = new Swiper('.hero-slider', {
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.arr-right',
                    prevEl: '.arr-left',
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.slide-content h1, .slide-content p, .slide-content a').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".hero-slider").hover(function () {
                swiper.autoplay.stop();
            }, function () {
                swiper.autoplay.start();
            });
        }

        // == Testimonial Slider== //
        if ($('.test-slider').length) {
            var swiper2 = new Swiper('.test-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 1200,
                loop: true,
                pagination: {
                    el: '.test-pagination',
                    clickable: true
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.testimonials .test-img, .testimonials h5, .testimonials span, .testimonials p').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".test-slider").hover(function () {
                swiper2.autoplay.stop();
            }, function () {
                swiper2.autoplay.start();
            });
        }

        // == Clients Slider== //
        if ($('.clients-slider').length) {
            var swiper3 = new Swiper('.clients-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                slidesPerView: 5,
                breakpoints: {
                    1200: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 3
                    },
                    576: {
                        slidesPerView: 2
                    },
                    400: {
                        slidesPerView: 1
                    }
                }
            });

            $(".clients-slider").hover(function () {
                swiper3.autoplay.stop();
            }, function () {
                swiper3.autoplay.start();
            });
        }

        // == Light Gallery== //
        if ($('#lightgallery').length) {
            $("#lightgallery").lightGallery();
        }
    });
})(jQuery);

// == Google Maps Initialisierungsfunktion== //
function initMap() {
    // Koordinaten für den Standort
    var myLatLng = {lat: 48.37136498655407, lng: 8.647300920355544};

    // Erstellen der Karte
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng, // Zentrieren der Karte auf den angegebenen Koordinaten
        zoom: 14 // Zoomstufe (1 ist am weitesten entfernt, 20 ist am nächsten)
    });

    // Erstellen eines Markers für den Standort
    var marker = new google.maps.Marker({
        position: myLatLng, // Position des Markers
        map: map, // Karte, auf der der Marker platziert wird
        title: 'Hier bin ich!' // Titel, der beim Überfahren mit der Maus angezeigt wird
    });
}

$(window).on('load', function () {
    // == Animate loader off screen == //
    $(".css-loader").fadeOut("slow");
    AOS.init({
        disable: 'mobile'
    });
});
