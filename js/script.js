// ===== NAVBAR ===== //
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 100) {
        $(".nav-menu").addClass("costum-navbar pt-2 pb-2");
        } else {
            $(".nav-menu").removeClass("costum-navbar pt-2 pb-2");
        }
});

// ===== HAMBURGER BUTTON ===== //
$(document).ready(function () {
    $(".nav-button").click(function () {
        $(".nav-button").toggleClass("change");
        $(".nav-menu").toggleClass("costum-navbar pt-2 pb-2");
    });
});
