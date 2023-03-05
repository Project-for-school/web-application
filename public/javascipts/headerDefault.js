// handle header
// var changeSrcImage = document.getElementById("logo-banner")
$(document).ready(() => {
    $(window).scroll(() => {
        if ($(this).scrollTop()) {
            // changeSrcImage.src = './src/img/logo-black.png'
            $('#header').addClass('sticky')
        } else {
            // changeSrcImage.src = './src/img/logo.png'
            $('#header').removeClass('sticky')
        }
    })
})