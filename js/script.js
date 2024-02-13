$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 5,
        loop: true,
        margin: 10,

        nav: true,
        navText: [
            "<img src='asseits/images/b.png'>",
            "<img src='asseits/images/a.png' alt=''>"
        ],
        merge: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                margin: 10,
                loop: false
            }
        }
    })

});
