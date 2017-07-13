onResize = function() {
    if($(window).width() < 768) {
        $('.showAll').on('click', function(event) {
            $('.fadeIn').toggle('slow');
        })
    } else {
        $('.showAll').off('click');
    }
}
$(document).ready(onResize);
