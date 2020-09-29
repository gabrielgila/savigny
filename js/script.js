// === REFRESH on resize === //
$(window).bind('resize', function(e) {
    this.location.reload(false);
});

// === VIDEO HOME === //



// === NAVBAR === //
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (window.innerWidth > 768) {
        if (position >= 100) {
            $(".nav-menu").addClass("costum-navbar pt-2 pb-2");
            $(".dulani").removeClass("dark-text");
            $(".dulani-logo").removeClass("white-fill");
        } else {
            $(".nav-menu").removeClass("costum-navbar pt-2 pb-2");
            $(".dulani").addClass("dark-text");
            $(".dulani-logo").addClass("white-fill");
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


// === FILTER Our Products === //
$(document).ready(function () {
    $(".all-selected").click(function () {
        $("#adiran").show();
        $("#idara").show();
        $("#xenia").show();
        $("#dulani").show();
    });

    $(".woman-selected").click(function () {
        $("#adiran").hide();
        $("#idara").hide();
        $("#xenia").show();
        $("#dulani").show();
    });

    $(".sport-selected").click(function () {
        $("#adiran").show();
        $("#idara").show();
        $("#xenia").hide();
        $("#dulani").hide();
    });
});
