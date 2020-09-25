// === NAVBAR === //
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (window.innerWidth > 768) {
        console.log("uno");
        if (position >= 100) {
            console.log("dos");
            $(".nav-menu").addClass("costum-navbar pt-2 pb-2");
        } else {
            $(".nav-menu").removeClass("costum-navbar pt-2 pb-2");
        }
    }
});

// === HAMBURGER BUTTON === //
$(document).ready(function () {
    $(".nav-button").click(function () {
        $(".nav-button").toggleClass("change");
        $(".nav-menu").toggleClass("costum-navbar pt-2 pb-2");
    });
});


// === REFRESH on resize === //
$(window).bind('resize', function(e) {
    this.location.reload(false);
});
