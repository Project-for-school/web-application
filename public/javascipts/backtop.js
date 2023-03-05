$(document).ready(() => {
    $(window).scroll(() => {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });
    $("#backtop").click(() => {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
});