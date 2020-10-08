function internetExporer () {
    function isIE() {
        return document.documentMode;
    }
    if (isIE()) {
        $("#headerContent").addClass("header-image-background");
        $("#headerContentMobile").addClass("header-image-background");
        $("#headerContentOurProducts").addClass("header-image-background");
        $("#headerContentMobileOurProducts").addClass("header-image-background");
    } else {
        $("#headerContent").removeClass("header-image-background");
        $("#headerContentMobile").removeClass("header-image-background");
        $("#headerContentOurProducts").removeClass("header-image-background");
        $("#headerContentMobileOurProducts").removeClass("header-image-background");
    }
}

function apple () {
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        $("#headerContent").addClass("header-image-background");
        $("#headerContentMobile").addClass("header-image-background");
        $("#headerContentOurProducts").addClass("our-products-header-background");
        $("#headerContentMobileOurProducts").addClass("our-products-header-background");
        $(".video-container").hide();
    } else {
        $("#headerContent").removeClass("header-image-background");
        $("#headerContentMobile").removeClass("header-image-background");
        $("#headerContentOurProducts").removeClass("our-products-header-background");
        $("#headerContentMobileOurProducts").removeClass("our-products-header-background");
        $(".video-container").show();
    }

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $(".source-video").replaceWith($('<source src="video/homeVideo.mp4" type="video/mp4">'));
        $(".source-video-our-products").replaceWith($('<source src="video/ourProducts.mp4" type="video/mp4">'));
    } else {
    }
}

$(document).ready(function () {

    // === Scroll to next Element onCLick === //
    $(".jump-to").click(function() {
        $('html,body').animate({
                scrollTop: $(".jump-end").offset().top},
            'slow');
    });

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
    apple();

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
