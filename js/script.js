$(window).on('load', function () {
    $('.loader .inner').fadeOut(500, function () {
        $('.loader').fadeOut(750);
    });

    $('.items').isotope({
        filter: '*',
        animationOption: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});

// when document ready activate superslides.
$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 7000,
        pagination: false
    });

    let typed = new Typed(".typed", {
        strings: ['Front-End web developer.', 'Flutter Dart.'],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            488: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });


    let skillsTopOffset = $('.skillsSection').offset().top;
    let statsTopOffset = $('.statsSection').offset().top;
    let countUpFinished = false;

    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }


        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $('.counter').each(function () {
                let element = $(this);
                let endVal = parseInt(element.text());

                element.countup(endVal);
            })

            countUpFinished = true;
        }
    });


    $('#navigation li a').click(function (e) {
        e.preventDefault();

        let targetElement = $(this).attr('href');
        let targetPosition = $(targetElement).offset().top;
        $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
    });




    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        let body = $('body');

        if ($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + 'px');
            body.addClass('fixedNav');
        } else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }
    }
    $(document).ready(function () {
        $('#formButton').click(function () {
            $('#contactForm').toggle();
        });
    });


});
