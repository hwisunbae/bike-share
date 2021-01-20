$(function() {

    "use strict";

    var $container = $('#gallery');
    $container.isotope({
        itemSelector: '.item',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    // filter items when filter link is clicked
    $('#filters a').on("click", function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({filter: selector});
        return false;
    });
});