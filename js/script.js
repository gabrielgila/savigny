// === REFRESH on resize === //
$(window).bind('resize', function(e) {
    this.location.reload(false);
});

function internetExporer () {
    function isIE() {
        return document.documentMode;
    }
    if (isIE()) {
        $("#headerContent").addClass("header-image-background");
        $("#headerContentMobile").addClass("header-image-background");
    } else {
        $("#headerContent").removeClass("header-image-background");
        $("#headerContentMobile").removeClass("header-image-background");
    }
}

function ios () {
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        $("#headerContent").addClass("header-image-background");
        $("#headerContentMobile").addClass("header-image-background");
        $(".video-container").hide();
    } else {
        $("#headerContent").removeClass("header-image-background");
        $("#headerContentMobile").removeClass("header-image-background");
        $(".video-container").show();
    }
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $(".source-video").replaceWith($('<source src="video/homeVideo.mp4" type="video/mp4">'));
    } else {
    }
}

$(document).ready(function () {
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

    internetExporer();
    ios();

    // === HAMBURGER BUTTON === //
    $(".nav-button").click(function () {
        $(".nav-button").toggleClass("change");
        $(".nav-menu").toggleClass("costum-navbar pt-2 pb-2");
    });

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
